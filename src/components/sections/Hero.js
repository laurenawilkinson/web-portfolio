import * as React from 'react'
import cn from 'classnames'
import { containerXl } from '../../styles/utils/containers.module.scss'
import {
  headingXl,
  subHeading,
} from '../../styles/utils/typography.module.scss'
import {
  buttonMain,
  hasIconRight,
} from '../../styles/components/Button.module.scss'
import * as styles from '../../styles/sections/Hero.module.scss'
import Icon from '../utils/Icon'
import AnimatedWindow from '../ui/AnimatedWindow'

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={cn(containerXl, styles.container)}>
        <div className={styles.textContainer}>
          <p className={subHeading}>Front End Developer</p>
          <h1 className={headingXl}>Lauren Wilkinson</h1>

          <p className={styles.tagline}>
            Delivering aesthetic yet accessible user experiences{' '}
            <img
              src="/images/cherry-blossom-icon.png"
              alt=""
              height="24"
              width="24"
            />
          </p>

          <a className={cn(buttonMain, hasIconRight)} href="#projects">
            View Projects <Icon>arrow_right_alt</Icon>
          </a>
        </div>

        <div className={styles.imageContainer}>
          <AnimatedWindow />
        </div>
      </div>
    </section>
  )
}

export default Hero
