'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { bootLines } from '@/lib/content'
import { markReady } from '@/lib/terminalReady'
import styles from './BootSequence.module.css'

/** Colourises one boot line: [ OK ] green, the loaded module blue, etc. */
function renderBootLine(line: string): ReactNode {
  if (line === '') return ' '
  if (line.startsWith('DOGOTARU SYSTEMS')) {
    return <span className={styles.dim}>{line}</span>
  }
  if (line === 'ACCESS GRANTED') {
    return <span className={styles.green}>ACCESS GRANTED</span>
  }

  const okIndex = line.indexOf('[ OK ]')
  const head = okIndex >= 0 ? line.slice(0, okIndex) : line

  let headNode: ReactNode = head
  const loading = head.match(/^(LOADING MODULE\s+)([a-z_]+)(.*)$/)
  if (loading) {
    headNode = (
      <>
        {loading[1]}
        <span className={styles.blue}>{loading[2]}</span>
        {loading[3]}
      </>
    )
  }

  return (
    <>
      {headNode}
      {okIndex >= 0 && <span className={styles.green}>[ OK ]</span>}
    </>
  )
}

export default function BootSequence() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [fading, setFading] = useState(false)
  const [removed, setRemoved] = useState(false)
  const done = useRef(false)

  const reveal = useCallback(() => {
    if (done.current) return
    done.current = true
    markReady()
    setFading(true)
    setTimeout(() => setRemoved(true), 460)
  }, [])

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const timers: ReturnType<typeof setTimeout>[] = []

    if (reduced) {
      timers.push(
        setTimeout(() => {
          setVisibleCount(bootLines.length)
          reveal()
        }, 250),
      )
    } else {
      let printed = 0
      const printNext = () => {
        printed += 1
        setVisibleCount(printed)
        if (printed >= bootLines.length) {
          timers.push(setTimeout(reveal, 460))
        } else {
          timers.push(setTimeout(printNext, 110 + Math.random() * 160))
        }
      }
      timers.push(setTimeout(printNext, 600))
    }

    const onKey = () => reveal()
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      timers.forEach(clearTimeout)
    }
  }, [reveal])

  if (removed) return null

  return (
    <div id="boot" className={`${styles.boot} ${fading ? styles.fading : ''}`}>
      <div className={styles.powerline} aria-hidden="true" />
      <div className={styles.log} aria-hidden="true">
        {bootLines.slice(0, visibleCount).map((line, index) => (
          <div key={index} className={styles.line}>
            {renderBootLine(line)}
          </div>
        ))}
      </div>
      <button type="button" className={styles.skip} onClick={reveal}>
        [ press any key to skip ]
      </button>
    </div>
  )
}
