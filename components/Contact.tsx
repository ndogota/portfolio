import { Fragment } from 'react'
import { contact, email, sectionIds } from '@/lib/content'
import ScrambleText from './ScrambleText'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id={sectionIds.contact} className={styles.panel}>
      <div className="wrap">
        <p className={styles.head}>
          <ScrambleText>{contact.label}</ScrambleText>
        </p>

        <h2 className={styles.heading} data-reveal>
          {contact.headingLines.map((line, index) => (
            <Fragment key={line}>
              {line}
              {index < contact.headingLines.length - 1 && <br />}
            </Fragment>
          ))}
        </h2>

        <p className={styles.transmit} data-reveal>
          transmit to{' '}
          <a className={styles.mail} href={`mailto:${email}`}>
            {email}
          </a>
        </p>

        <div className={styles.links} data-reveal>
          {contact.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.foot}>
          <span>{contact.footer[0]}</span>
          <span>{contact.footer[1]}</span>
        </div>
      </div>
    </section>
  )
}
