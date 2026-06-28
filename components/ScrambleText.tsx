'use client'

import { useEffect, useRef, useState } from 'react'
import { onReady } from '@/lib/terminalReady'

/** Latin plus a few Cyrillic glyphs used as decrypt noise. */
const NOISE =
  'ABCDEFGHKMNPRTUVXZ0123456789#%&@?/\\<>[]{}=+*АБВГДЖЗИКЛМПРСТФЦЧШЯ'

type Trigger = 'ready' | 'view'

interface ScrambleTextProps {
  /** The real, final text. Rendered as-is on the server and without JS. */
  children: string
  /** 'ready' waits for the boot sequence; 'view' waits for scroll into view. */
  start?: Trigger
  /** Milliseconds to wait after the trigger before resolving. */
  delay?: number
  className?: string
}

const STEP_MS = 26
const REVEAL_LAG = 6

export default function ScrambleText({
  children,
  start = 'view',
  delay = 0,
  className,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [text, setText] = useState(children)

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduced) return

    let frameTimer: ReturnType<typeof setInterval> | undefined
    let startTimer: ReturnType<typeof setTimeout> | undefined
    let done = false

    const run = () => {
      if (done) return
      done = true
      const real = children
      const total = 16 + real.length
      let frame = 0
      frameTimer = setInterval(() => {
        let out = ''
        for (let i = 0; i < real.length; i++) {
          const ch = real[i]
          if (ch === ' ' || ch === '\n') {
            out += ch
          } else if (i < frame - REVEAL_LAG) {
            out += ch
          } else {
            out += NOISE[(Math.random() * NOISE.length) | 0]
          }
        }
        setText(out)
        frame++
        if (frame > total) {
          clearInterval(frameTimer)
          setText(real)
        }
      }, STEP_MS)
    }

    const trigger = () => {
      startTimer = setTimeout(run, delay)
    }

    let unobserve: (() => void) | undefined

    if (start === 'ready') {
      unobserve = onReady(trigger)
    } else {
      const node = ref.current
      if (!node) return
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            observer.disconnect()
            trigger()
          }
        },
        { threshold: 0.2 },
      )
      observer.observe(node)
      unobserve = () => observer.disconnect()
    }

    return () => {
      unobserve?.()
      if (startTimer) clearTimeout(startTimer)
      if (frameTimer) clearInterval(frameTimer)
    }
  }, [children, start, delay])

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  )
}
