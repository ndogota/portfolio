import { dossier, sectionIds } from '@/lib/content'
import ScrambleText from './ScrambleText'
import styles from './Dossier.module.css'

export default function Dossier() {
  return (
    <section id={sectionIds.dossier} className={styles.panel}>
      <div className="wrap">
        <p className={styles.head}>
          <ScrambleText>{dossier.label}</ScrambleText>
        </p>

        <div className={styles.grid}>
          <div>
            <p className={styles.lead} data-reveal>
              <ScrambleText>{dossier.lead}</ScrambleText>
            </p>
            <p className={styles.body} data-reveal>
              {dossier.body}
            </p>
            <p className={styles.origin} data-reveal>
              {dossier.origin}
            </p>
          </div>

          <div data-reveal>
            <dl className={styles.phases}>
              {dossier.phases.map((phase) => (
                <div key={phase.verb} className={styles.row}>
                  <dt className={styles.verb}>{phase.verb}</dt>
                  <dd className={styles.line}>{phase.line}</dd>
                </div>
              ))}
            </dl>

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
      </div>
    </section>
  )
}
