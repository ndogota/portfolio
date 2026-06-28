import { dossier, sectionIds } from '@/lib/content'
import ScrambleText from './ScrambleText'
import styles from './Dossier.module.css'

export default function Dossier() {
  return (
    <section id={sectionIds.dossier} className={styles.panel}>
      <div className={`wrap ${styles.dossier}`}>
        <p className={styles.lead} data-reveal>
          <ScrambleText>{dossier.lead}</ScrambleText>
        </p>

        <div data-reveal>
          <p className={styles.paragraph}>{dossier.paragraph}</p>
          <dl className={styles.kv}>
            {dossier.entries.map((entry) => (
              <div key={entry.key} className={styles.row}>
                <dt className={styles.key}>{entry.key}</dt>
                <dd className={entry.accent ? styles.accent : styles.value}>
                  <span className={styles.eq}>= </span>
                  {entry.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
