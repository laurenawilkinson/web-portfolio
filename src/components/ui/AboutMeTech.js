import * as React from 'react'
import TagList from '../layout/TagList'
import * as styles from '../../styles/sections/About.module.scss'

const AboutMeTech = ({ tags, text }) => {
  return (
    <p className={styles.tech}>
      <span>{text}</span>
      <TagList items={tags} />
    </p>
  )
}

export default AboutMeTech
