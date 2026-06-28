'use client'

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import { email, sectionIds, terminal } from '@/lib/content'
import { onReady } from '@/lib/terminalReady'
import styles from './CommandLine.module.css'

interface LogEntry {
  id: number
  command: string
  output: ReactNode
}

function Prompt() {
  return (
    <span className={styles.prompt}>
      <span className={styles.arrow}>➜</span>{' '}
      <span className={styles.cwd}>~/portfolio</span>{' '}
      <span className={styles.git}>git:(</span>
      <span className={styles.branch}>main</span>
      <span className={styles.git}>)</span>
    </span>
  )
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function CommandLine() {
  const [value, setValue] = useState('')
  const [log, setLog] = useState<LogEntry[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const logRef = useRef<HTMLDivElement>(null)
  const nextId = useRef(0)

  // Focus the prompt once the boot sequence reveals the interface.
  useEffect(
    () =>
      onReady(() => {
        if (window.matchMedia('(pointer: fine)').matches) {
          inputRef.current?.focus({ preventScroll: true })
        }
      }),
    [],
  )

  useEffect(() => {
    const node = logRef.current
    if (node) node.scrollTop = node.scrollHeight
  }, [log])

  const handlers: Record<string, () => ReactNode> = {
    help: () => terminal.help,
    whoami: () => terminal.whoami,
    stack: () => terminal.stack,
    ls: () => terminal.ls,
    surface: () => terminal.surface,
    sudo: () => terminal.sudo,
    work: () => {
      scrollToId(sectionIds.work)
      return terminal.routeWork
    },
    dossier: () => {
      scrollToId(sectionIds.dossier)
      return terminal.routeDossier
    },
    about: () => {
      scrollToId(sectionIds.dossier)
      return terminal.routeDossier
    },
    contact: () => {
      scrollToId(sectionIds.contact)
      return (
        <>
          channel open //{' '}
          <a className={styles.link} href={`mailto:${email}`}>
            {email}
          </a>
        </>
      )
    },
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return
    const raw = value.trim()
    setValue('')
    if (!raw) return

    const key = raw.toLowerCase().split(' ')[0]

    if (key === 'clear') {
      setLog([])
      return
    }

    const handler = handlers[key]
    const output: ReactNode = handler ? (
      handler()
    ) : (
      <>
        <span className={styles.error}>command not found:</span> {key}. type
        &apos;help&apos;.
      </>
    )

    setLog((prev) => [...prev, { id: nextId.current++, command: raw, output }])
  }

  return (
    <div className={styles.cli}>
      <div className={styles.bar}>
        <span className={styles.dot}>●</span> zsh · interactive
      </div>

      <div className={styles.log} ref={logRef}>
        {log.map((entry) => (
          <div key={entry.id}>
            <div className={styles.echo}>
              <Prompt /> {entry.command}
            </div>
            <div className={styles.out}>{entry.output}</div>
          </div>
        ))}
      </div>

      <div className={styles.row}>
        <Prompt />
        <input
          ref={inputRef}
          className={styles.input}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={onKeyDown}
          aria-label="terminal command input"
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </div>
  )
}
