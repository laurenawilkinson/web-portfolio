import * as React from 'react'
import { containerMd } from '../../styles/utils/containers.module.scss'
import { headingLg } from '../../styles/utils/typography.module.scss'
import * as styles from '../../styles/sections/About.module.scss'

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={containerMd}>
        <h2 className={headingLg}>About</h2>
      </div>
    </section>
  )
}

export default About
