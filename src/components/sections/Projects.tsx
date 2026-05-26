import React from 'react'
import { containerXl } from '../../styles/utils/containers.module.scss'
import { headingLg } from '../../styles/utils/typography.module.scss'
import * as styles from '../../styles/sections/Projects.module.scss'
import FeaturedProject from '../ui/FeaturedProject/FeaturedProject'
import ProjectsData from '../../assets/data/Projects.json'
import ProjectInfo from '../ui/ProjectInfo/ProjectInfo'
import FadeInLeft from '../animations/FadeInLeft'
import { useInView, useTransition, animated, config } from '@react-spring/web'
import { Project } from '../../types'

const Projects: React.FC = () => {
  const projects: Project[] = ProjectsData
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const [projectsRef, inView] = useInView({
    once: true,
    amount: 0.5,
  })

  const transitions = useTransition(inView ? otherProjects : [], {
    from: { opacity: 0, translateY: -80 },
    enter: { opacity: 1, translateY: 0 },
    config: config.slow,
    trail: 200,
  })

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
          <FadeInLeft>
            <h2 className={headingLg}>More Projects</h2>
          </FadeInLeft>

          <ul className={styles.projectCards} ref={projectsRef}>
            {transitions((style, project) => (
              <animated.li className={styles.projectCard} style={style}>
                <ProjectInfo project={project} />
              </animated.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Projects
