import * as React from 'react'
import { containerXl } from '../../styles/utils/containers.module.scss'
import { headingLg } from '../../styles/utils/typography.module.scss'
import * as styles from '../../styles/sections/Projects.module.scss'
import FeaturedProject from '../ui/FeaturedProject/FeaturedProject'
import ProjectsData from '../../assets/data/Projects.json'
import ProjectInfo from '../ui/ProjectInfo'

const Projects = () => {
  const featuredProjects = ProjectsData.filter((p) => p.featured)
  const otherProjects = ProjectsData.filter((p) => !p.featured)

  return (
    <>
      {featuredProjects.map((project, index) => (
        <FeaturedProject
          id={index === 0 ? 'projects' : `project-${index}`}
          project={project}
          key={index}
        />
      ))}
      <section className={styles.section}>
        <div className={containerXl}>
          <h2 className={headingLg}>More Projects</h2>

          <ul className={styles.projectCards}>
            {otherProjects.map((project, index) => (
              <li key={index} className={styles.projectCard}>
                <ProjectInfo project={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Projects
