import { hero, sectionIds } from '@/lib/content'
import ScrambleText from './ScrambleText'
import CommandLine from './CommandLine'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id={sectionIds.hero} className={styles.hero}>
      <div className="wrap">
        <p className={styles.eyebrow}>
          <span className={styles.dot}>●</span> {hero.eyebrow}
        </p>

        <h1 className={styles.title}>
          <ScrambleText start="ready" delay={0}>
            {hero.titleLines[0]}
          </ScrambleText>
          <br />
          <ScrambleText start="ready" delay={110}>
            {hero.titleLines[1]}
          </ScrambleText>
        </h1>

        <p className={styles.role}>
          <span className={styles.green}>{hero.role.lead}</span>{' '}
          <span className={styles.dim}>{'//'}</span>{' '}
          <span className={styles.blue}>{hero.role.tail}</span>
        </p>

        <p className={styles.statement}>
          <ScrambleText start="ready" delay={220}>
            {hero.statement}
          </ScrambleText>
        </p>

        <CommandLine />

        <p className={styles.hint}>
          {hero.hint.lead}
          <code className={styles.green}>{hero.hint.command}</code>
          {hero.hint.tail}
        </p>
      </div>
    </section>
  )
}
