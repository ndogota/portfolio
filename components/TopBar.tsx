'use client'

import { useEffect, useState } from 'react'
import {
  host,
  hostname,
  layoutSymbol,
  statusBar,
  workspaces,
} from '@/lib/content'
import styles from './TopBar.module.css'

/**
 * Single dwm bar: workspace tags + tiling layout symbol on the left, the
 * focused-window title (the section in view), and a right-aligned slstatus
 * readout. The selected tag mirrors dwm's inverted SchemeSel block; tags are
 * real anchors so they work without JavaScript.
 */
export default function TopBar() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const update = () => {
      let current = 0
      workspaces.forEach((workspace, index) => {
        const el = document.getElementById(workspace.id)
        if (el && el.getBoundingClientRect().top < 220) current = index
      })
      // At the bottom of the page the last (short) section may never cross the
      // threshold, so force it active once we have scrolled all the way down.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (atBottom) current = workspaces.length - 1
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
    <header className={styles.bar}>
      <nav className={styles.tags} aria-label="workspaces">
        {workspaces.map((workspace, index) => (
          <a
            key={workspace.id}
            href={`#${workspace.id}`}
            className={`${styles.tag} ${index === active ? styles.selected : ''}`}
            aria-label={`workspace ${workspace.tag}: ${workspace.label}`}
            aria-current={index === active ? 'true' : undefined}
          >
            {workspace.tag}
          </a>
        ))}
      </nav>

      <span className={styles.layout} aria-hidden="true">
        {layoutSymbol}
      </span>

      <span className={styles.title} aria-hidden="true">
        <span className={styles.host}>{host}</span>
        <span className={styles.path}>:{workspaces[active].path}</span>
      </span>

      <span className={styles.spacer} />

      <span className={styles.status} aria-hidden="true">
        <span className={styles.seg}>
          signal <span className={styles.accent}>{statusBar.signal}</span>
        </span>
        <span className={`${styles.seg} ${styles.hostSeg}`}>{hostname}</span>
        <span className={`${styles.seg} ${styles.meta}`}>{statusBar.meta}</span>
      </span>
    </header>
  )
}
