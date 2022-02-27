import * as React from 'react'
import { containerMd } from '../../styles/utils/containers.module.scss'
import { headingLg } from '../../styles/utils/typography.module.scss'
import * as styles from '../../styles/sections/Skills.module.scss'
import skillsList from '../../assets/data/Skills.json'

const Skills = () => {
  return (
    <section className={styles.section}>
      <div className={containerMd}>
        <h2 className={headingLg}>Skills</h2>

        {skillsList.map((item) => (
          <>
            <strong>{item.title}</strong>
            <ul>
              {item.list.map((tech) => (
                <li className={styles.skill}>{tech}</li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </section>
  )
}

export default Skills
