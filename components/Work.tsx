import { projects, sectionIds, workLabel } from '@/lib/content'
import ScrambleText from './ScrambleText'
import styles from './Work.module.css'

export default function Work() {
  return (
    <section id={sectionIds.work} className={styles.panel}>
      <div className="wrap">
        <p className={styles.head}>
          <ScrambleText>{workLabel}</ScrambleText>
        </p>

        {projects.map((project) => (
          <article
            key={project.index}
            data-reveal
            className={`${styles.item} ${project.classified ? styles.soon : ''}`}
          >
            <div className={styles.index}>{project.index}</div>
            <div>
              <h3 className={styles.name}>
                {project.repo ? (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className={styles.description}>{project.description}</p>
            </div>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
