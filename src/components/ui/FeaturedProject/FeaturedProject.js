import * as React from 'react'
import cn from 'classnames'
import { containerSm } from '../../../styles/utils/containers.module.scss'
import ProjectInfo from '../ProjectInfo/ProjectInfo'
import * as styles from '../../../styles/components/FeaturedProject.module.scss'
import FeaturedProjectBackground from './FeaturedProjectBackground'
import FeaturedProjectImage from './FeaturedProjectImage'
import FadeInLeft from '../../animations/FadeInLeft'

const FeaturedProject = ({ project, id }) => {
  const { image, colour, name, demo } = project

  return (
    <section id={id} className={cn(styles.section, styles[colour])}>
      <div className={styles.imageSection}>
        <FeaturedProjectBackground />
        <a href={demo} target="_blank" rel="noreferrer">
          <FeaturedProjectImage image={image} name={name} />
        </a>
      </div>
      <div className={styles.textSection}>
        <FadeInLeft>
          <ProjectInfo project={project} featured={true} />
        </FadeInLeft>
      </div>
    </section>
  )
}

export default FeaturedProject
