'use client'

import { useEffect, useState } from 'react'
import { sectionIds } from '@/lib/content'
import styles from './StatusBar.module.css'

const channels = [
  { id: sectionIds.hero, label: 'status' },
  { id: sectionIds.work, label: 'work' },
  { id: sectionIds.dossier, label: 'dossier' },
  { id: sectionIds.contact, label: 'channel' },
]

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
      <span className={styles.host}>dogotaru</span>
      <span className={styles.seg}>~/portfolio</span>
      <span className={styles.spacer} />
      <span className={styles.seg}>
        SIGNAL <span className={styles.value}>▁▃▅▇</span>
      </span>
      <span className={`${styles.seg} ${styles.hideSmall}`}>
        PWR <span className={styles.value}>100%</span>
      </span>
      <span className={styles.channel}>
        CH {active}:{channels[active].label}
      </span>
    </footer>
  )
}
