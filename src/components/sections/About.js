import * as React from 'react'
import { containerMd } from '../../styles/utils/containers.module.scss'
import {
  headingLg,
  primaryText,
} from '../../styles/utils/typography.module.scss'
import * as styles from '../../styles/sections/About.module.scss'
import AboutMeTech from '../ui/AboutMeTech'
import { useInView, animated, config } from '@react-spring/web'

const About = () => {
  const [ref, animation] = useInView(
    () => ({
      from: {
        opacity: 0,
        translateY: 50,
      },
      to: {
        opacity: 1,
        translateY: 0,
      },
      ...config.gentle,
    }),
    {
      once: true,
      threshold: 0.8,
    }
  )

  return (
    <section id="about" className={styles.section}>
      <div className={containerMd}>
        <animated.div className={styles.card} ref={ref} style={animation}>
          <h2 className={headingLg}>Hey!</h2>

          <p>
            I'm <strong className={primaryText}>Lauren</strong>, a web developer
            and UX enthusiast with over{' '}
            <strong className={primaryText}>five years</strong> of professional
            experience working within the front-end space.
          </p>

          <AboutMeTech
            text="I work daily with"
            tags={['React', 'TypeScript', 'Styled Components']}
          />
          <AboutMeTech
            text="For personal projects, my go-to stack is"
            tags={['Vue', 'TypeScript', 'Sass']}
          />
          <AboutMeTech
            text="This portfolio is made with"
            tags={['React', 'Gatsby', 'CSS Modules']}
          />
          <AboutMeTech
            text="I'm currently learning"
            tags={['React Spring', 'Laravel', 'Decap CMS']}
          />
        </animated.div>
      </div>
    </section>
  )
}

export default About
