import React from 'react'
import TagList from '../../layout/TagList'
import * as styles from '../../../styles/sections/About.module.scss'

interface AboutMeTechProps {
  tags: string[]
  text: string
}

const AboutMeTech: React.FC<AboutMeTechProps> = ({ tags, text }) => {
  return (
    <div className={styles.tech}>
      <span>{text}</span>
      <TagList items={tags} />
    </div>
  )
}

export default AboutMeTech
