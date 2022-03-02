import * as React from 'react'
import { containerMd } from '../../styles/utils/containers.module.scss'
import {
  headingLg,
  primaryText,
} from '../../styles/utils/typography.module.scss'
import * as styles from '../../styles/sections/About.module.scss'

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={containerMd}>
        <div className={styles.card}>
          <h2 className={headingLg}>About me</h2>

          <p>
            Hi! I'm <strong className={primaryText}>Lauren</strong> and I enjoy
            building beautiful user interfaces that are both intuitive and
            pleasant to use. I am a Web Development graduate with{' '}
            <strong className={primaryText}>First Class Honours</strong>, and
            over <strong className={primaryText}>three years</strong> of
            professional experience working within the front-end space,
            currently based in Manchester, England.
          </p>

          <p>
            I find the most comfort in working with{' '}
            <strong className={primaryText}>Vue</strong> and{' '}
            <strong className={primaryText}>Sass</strong>, but I enjoy branching
            out and learning new technologies. Recently I have been trying out{' '}
            <strong className={primaryText}>Next.js</strong> (with CSS Modules +
            TypeScript) and back-end tech (Postgres with Node.js + Prisma).
          </p>

          <p>
            Outside of coding, I enjoy playing{' '}
            <strong className={primaryText}>video games</strong>, listening to{' '}
            <strong className={primaryText}>podcasts</strong> and{' '}
            <strong className={primaryText}>drawing</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
