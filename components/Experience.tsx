import { experience, experienceLabel, sectionIds } from '@/lib/content'
import ScrambleText from './ScrambleText'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id={sectionIds.experience} className={styles.panel}>
      <div className="wrap">
        <p className={styles.head}>
          <ScrambleText>{experienceLabel}</ScrambleText>
        </p>

        {experience.map((entry) => (
          <article
            key={`${entry.company}-${entry.dates}`}
            data-reveal
            className={styles.entry}
          >
            <header className={styles.entryHead}>
              <h3 className={styles.role}>{entry.role}</h3>
              <span className={styles.company}>{entry.company}</span>
            </header>
            <p className={styles.meta}>
              {entry.type} · {entry.dates} · {entry.location}
            </p>
            <ul className={styles.bullets}>
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
