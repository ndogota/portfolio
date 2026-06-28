'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { bootSequence } from '@/lib/content'
import { markReady } from '@/lib/terminalReady'
import { onReboot } from '@/lib/bootBus'
import styles from './BootSequence.module.css'

const BASE_MS = 70
const START_MS = 200
const END_MS = 380

/** Colourises one boot line the way a real console renders status tokens. */
function renderBootLine(text: string): ReactNode {
  if (text === '') return ' '

  const status = text.match(/^\[\s*(OK|\*\*)\s*\]/)
  if (status) {
    const cls = status[1] === 'OK' ? styles.ok : styles.busy
    return (
      <>
        <span className={cls}>{status[0]}</span>
        {text.slice(status[0].length)}
      </>
    )
  }

  const kernel = text.match(/^(\[\s*\d+\.\d+\])(.*)$/)
  if (kernel) {
    return (
      <>
        <span className={styles.dim}>{kernel[1]}</span>
        {kernel[2]}
      </>
    )
  }

  if (text.includes(' login: ')) {
    const [hostPart, user] = text.split(' login: ')
    return (
      <>
        {hostPart} login: <span className={styles.green}>{user}</span>
      </>
    )
  }

  const prompt = text.match(/^(\S+@\S+?)(:\S*\$)\s(.*)$/)
  if (prompt) {
    return (
      <>
        <span className={styles.green}>{prompt[1]}</span>
        <span className={styles.blue}>{prompt[2]}</span> {prompt[3]}
      </>
    )
  }

  return <span className={styles.dim}>{text}</span>
}

export default function BootSequence() {
  const [count, setCount] = useState(0)
  const [fading, setFading] = useState(false)
  const [removed, setRemoved] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const finished = useRef(false)

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }, [])

  const finish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    clearTimers()
    markReady()
    setFading(true)
    timers.current.push(setTimeout(() => setRemoved(true), 400))
  }, [clearTimers])

  const play = useCallback(() => {
    clearTimers()
    finished.current = false
    setRemoved(false)
    setFading(false)
    setCount(0)
    let i = 0
    const step = () => {
      i += 1
      setCount(i)
      if (i >= bootSequence.length) {
        timers.current.push(setTimeout(finish, END_MS))
        return
      }
      timers.current.push(
        setTimeout(step, BASE_MS + (bootSequence[i - 1].pause ?? 0)),
      )
    }
    timers.current.push(setTimeout(step, START_MS))
  }, [clearTimers, finish])

  useEffect(() => {
    // Deferred so we never set state synchronously inside the effect body.
    const kickoff = setTimeout(play, 0)
    const offReboot = onReboot(play)
    const onKey = () => finish()
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(kickoff)
      offReboot()
      window.removeEventListener('keydown', onKey)
      clearTimers()
    }
  }, [play, finish, clearTimers])

  if (removed) return null

  return (
    <div
      id="boot"
      className={`${styles.boot} ${fading ? styles.fading : ''}`}
      aria-hidden="true"
      onClick={finish}
      onTouchStart={finish}
    >
      <div className={styles.log}>
        {bootSequence.slice(0, count).map((step, index) => (
          <div key={index} className={styles.line}>
            {renderBootLine(step.text)}
          </div>
        ))}
        {!fading && <span className={styles.cursor} />}
      </div>
      <button type="button" className={styles.skip} onClick={finish}>
        [ press any key to skip ]
      </button>
    </div>
  )
}
