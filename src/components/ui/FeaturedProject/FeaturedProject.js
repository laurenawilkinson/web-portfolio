import * as React from 'react'
import cn from 'classnames'
import { containerSm } from '../../../styles/utils/containers.module.scss'
import ProjectInfo from '../ProjectInfo'
import * as styles from '../../../styles/components/FeaturedProject.module.scss'
import FeaturedProjectBackground from './FeaturedProjectBackground'

const FeaturedProject = ({ project, id }) => {
  const { image, colour, name } = project

  return (
    <section id={id} className={cn(styles.section, styles[colour])}>
      <div className={styles.imageSection}>
        <FeaturedProjectBackground />
        <img src={`/images/projects/${image}`} alt={name} />
      </div>
      <div className={cn(containerSm, styles.textSection)}>
        <ProjectInfo project={project} featured={true} />
      </div>
    </section>
  )
}

export default FeaturedProject
