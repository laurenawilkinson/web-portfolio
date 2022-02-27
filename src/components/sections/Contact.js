import * as React from 'react'
import { containerMd } from '../../styles/utils/containers.module.scss'
import { headingLg } from '../../styles/utils/typography.module.scss'
import * as styles from '../../styles/sections/Contact.module.scss'

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={containerMd}>
        <h2 className={headingLg}>Contact</h2>
      </div>
    </section>
  )
}

export default Contact
