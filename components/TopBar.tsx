'use client'

import { useEffect, useState } from 'react'
import { host, layoutSymbol, workspaces } from '@/lib/content'
import styles from './TopBar.module.css'

/**
 * dwm-style bar: workspace tags on the left, the tiling layout symbol, then
 * the focused-window title. The tag for the section in view is "selected",
 * mirroring dwm's SchemeSel block. Tags are real anchors, so they still work
 * without JavaScript; only the selected highlight needs the client.
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

      <span className={styles.title}>
        <span className={styles.host}>{host}:</span>
        <span className={styles.path}>{workspaces[active].path}</span>
      </span>
    </header>
  )
}
