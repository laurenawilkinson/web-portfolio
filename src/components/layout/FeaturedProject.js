import * as React from 'react'
import cn from 'classnames'
import { containerSm } from '../../styles/utils/containers.module.scss'
import ProjectInfo from './ProjectInfo'
import * as styles from '../../styles/components/FeaturedProject.module.scss'

const FeaturedProject = ({ project = {} }) => {
  const { image, colour, name } = project

  return (
    <section id="projects" className={cn(styles.section, styles[colour])}>
      <div className={styles.imageSection}>
        <img src={`/images/projects/${image}`} alt={name} />
      </div>
      <div className={cn(containerSm, styles.textSection)}>
        <ProjectInfo project={project} featured={true} />
      </div>
    </section>
  )
}

export default FeaturedProject
