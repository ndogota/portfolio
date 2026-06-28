'use client'

import { useEffect, useState } from 'react'
import { statusBar } from '@/lib/content'
import styles from './StatusBar.module.css'

const { channels, signal, pwr, uplink, meta } = statusBar

/** Bottom telemetry bar. CH tracks the section currently in view. */
export default function StatusBar() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const update = () => {
      let current = 0
      channels.forEach((channel, index) => {
        const el = document.getElementById(channel.id)
        if (el && el.getBoundingClientRect().top < 220) current = index
      })
      setActive((prev) => (prev === current ? prev : current))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <footer className={styles.bar} aria-hidden="true">
      <span className={styles.seg}>
        SIGNAL <span className={styles.signal}>{signal}</span>
      </span>
      <span className={`${styles.seg} ${styles.hideSmall}`}>{pwr}</span>
      <span className={styles.spacer} />
      <span className={styles.channel}>CH {channels[active].label}</span>
      <span className={`${styles.seg} ${styles.hideSmall}`}>{uplink}</span>
      <span className={styles.seg}>{meta}</span>
    </footer>
  )
}
