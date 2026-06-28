import { sectionIds } from '@/lib/content'
import styles from './TopBar.module.css'

export default function TopBar() {
  return (
    <header className={styles.bar}>
      <span className={styles.dots}>
        <i className={styles.red} />
        <i className={styles.yellow} />
        <i className={styles.green} />
        <span className={styles.title}>
          nicolae@dogotaru-systems: ~/portfolio - zsh
        </span>
      </span>
      <nav className={styles.tabs}>
        <a href={`#${sectionIds.work}`}>work</a>
        <a href={`#${sectionIds.dossier}`}>dossier</a>
        <a href={`#${sectionIds.contact}`}>channel</a>
      </nav>
    </header>
  )
}
