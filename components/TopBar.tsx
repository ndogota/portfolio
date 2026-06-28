import { Fragment } from 'react'
import { brand, tabs } from '@/lib/content'
import styles from './TopBar.module.css'

export default function TopBar() {
  return (
    <header className={styles.bar}>
      <span className={styles.brand}>
        <span className={styles.rec} aria-hidden="true" />
        <span className={styles.recLabel}>REC</span>
        <span className={styles.name}>{brand}</span>
      </span>
      <nav className={styles.tabs}>
        {tabs.map((tab, index) => (
          <Fragment key={tab.href}>
            {index > 0 && (
              <span className={styles.sep} aria-hidden="true">
                ·
              </span>
            )}
            <a href={tab.href}>{tab.label}</a>
          </Fragment>
        ))}
      </nav>
    </header>
  )
}
