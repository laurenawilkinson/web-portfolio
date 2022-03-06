import * as React from 'react'
import cn from 'classnames'
import Icon from '../utils/Icon'
import {
  buttonMain,
  buttonLight,
  hasIconRight,
} from '../../styles/components/Button.module.scss'
import {
  headingSm,
  headingLg,
  subHeading,
} from '../../styles/utils/typography.module.scss'
import * as styles from '../../styles/components/ProjectInfo.module.scss'
import * as featuredStyles from '../../styles/components/FeaturedProject.module.scss'
import TagList from './TagList'

const ProjectInfo = ({ project = {}, featured = false }) => {
  const { name, description, tech, code, demo, upcoming } = project

  return (
    <div
      className={cn({
        [styles.textSectionWrapper]: true,
        [featuredStyles.textSectionWrapper]: featured,
      })}
    >
      <div>
        {featured && (
          <p className={cn(subHeading, styles.subHeading)}>Featured Project</p>
        )}
        <h3 className={cn({ [headingLg]: featured, [headingSm]: !featured })}>
          {name}
        </h3>

        <TagList items={tech} size={!featured ? 'small' : 'medium'} />
      </div>

      <div>
        <p>{description}</p>
      </div>

      {upcoming && (
        <div className={styles.upcoming}>
          <Icon>keyboard_double_arrow_up</Icon> Upcoming Project
        </div>
      )}

      {(demo || code) && (
        <div className={styles.buttons}>
          {demo && (
            <a
              className={cn({
                [buttonMain]: true,
                [hasIconRight]: true,
                [featuredStyles.buttonMain]: featured,
              })}
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              {featured ? 'View Site' : 'Site'} <Icon>arrow_right_alt</Icon>
            </a>
          )}

          {code && (
            <a
              className={cn({
                [buttonLight]: true,
                [hasIconRight]: true,
                [featuredStyles.buttonLight]: featured,
              })}
              href={code}
              target="_blank"
              rel="noreferrer"
            >
              Code <Icon>code</Icon>
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectInfo
