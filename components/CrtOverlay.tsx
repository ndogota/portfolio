'use client'

import { useEffect } from 'react'
import styles from './CrtOverlay.module.css'

/**
 * Decorative CRT layers. Scanlines, vignette and flicker are pure CSS; this
 * component only schedules the rare, short sync glitch on the document root.
 */
export default function CrtOverlay() {
  useEffect(() => {
    const root = document.documentElement
    let outer: ReturnType<typeof setTimeout>
    let inner: ReturnType<typeof setTimeout>

    const schedule = () => {
      outer = setTimeout(
        () => {
          root.classList.add('crt-glitch')
          inner = setTimeout(() => root.classList.remove('crt-glitch'), 220)
          schedule()
        },
        11000 + Math.random() * 8000,
      )
    }

    schedule()
    return () => {
      clearTimeout(outer)
      clearTimeout(inner)
      root.classList.remove('crt-glitch')
    }
  }, [])

  return (
    <>
      <div className={styles.scanlines} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.flicker} aria-hidden="true" />
    </>
  )
}
