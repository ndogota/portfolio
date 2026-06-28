import { stackGroups } from '@/lib/content'
import ScrambleText from './ScrambleText'
import styles from './Stack.module.css'

export default function Stack() {
  return (
    <section className={styles.panel}>
      <div className="wrap">
        <p className={styles.head}>
          <ScrambleText>stack</ScrambleText>
        </p>

        <div className={styles.grid}>
          {stackGroups.map((group) => (
            <div key={group.group} data-reveal className={styles.group}>
              <h3 className={styles.groupName}>{group.group}</h3>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
