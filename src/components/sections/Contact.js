import * as React from 'react'
import cn from 'classnames'
import { containerLg } from '../../styles/utils/containers.module.scss'
import { headingLg } from '../../styles/utils/typography.module.scss'
import {
  buttonPlain,
  hasIconLeft,
} from '../../styles/components/Button.module.scss'
import * as styles from '../../styles/sections/Contact.module.scss'
import Icon from '../utils/Icon'
import FadeIn from '../animations/FadeIn'

const Contact = () => {
  const links = [
    {
      name: 'email',
      link: 'mailto:lauren.a.wilkinson@outlook.com',
    },
    { name: 'github', link: 'https://github.com/laurenawilkinson' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/lauren-wilkinson/' },
  ]

  return (
    <footer id="contact" className={styles.section}>
      <FadeIn className={cn(containerLg, styles.container)}>
        <div>
          <h2 className={cn(headingLg, styles.heading)}>Contact</h2>
          <p className={styles.textContainer}>
            I'm always looking to connect and collaborate with others to build
            amazing things. Feel free to get in touch!
          </p>
        </div>

        <ul className={styles.links}>
          {links.map(({ link, name, icon, image }, i) => (
            <li className={styles.link} key={i}>
              <a
                className={cn(buttonPlain, hasIconLeft, styles.buttonLink)}
                href={link}
                target={name === 'email' ? '' : '_blank'}
                rel="noreferrer"
              >
                {icon && <Icon>{icon}</Icon>}
                {image && <img src={image} alt="" />}
                {name}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>
    </footer>
  )
}

export default Contact
