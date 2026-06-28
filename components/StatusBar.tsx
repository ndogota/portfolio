import { statusBar } from '@/lib/content'
import styles from './StatusBar.module.css'

const { signal, pwr, uplink, meta } = statusBar

/** Bottom slstatus-style telemetry strip. Decorative. */
export default function StatusBar() {
  return (
    <footer className={styles.bar} aria-hidden="true">
      <span className={styles.seg}>
        SIGNAL <span className={styles.signal}>{signal}</span>
      </span>
      <span className={`${styles.seg} ${styles.hideSmall}`}>{pwr}</span>
      <span className={styles.spacer} />
      <span className={`${styles.seg} ${styles.hideSmall}`}>{uplink}</span>
      <span className={styles.seg}>{meta}</span>
    </footer>
  )
}
