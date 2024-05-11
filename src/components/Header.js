import * as React from 'react'
import cn from 'classnames'
import { containerXl } from '../styles/utils/containers.module.scss'
import { buttonPlain } from '../styles/components/Button.module.scss'
import * as styles from '../styles/components/Header.module.scss'
import ThemeToggleButton from './ThemeToggleButton'
import { useInView, useTransition, animated, config } from '@react-spring/web'

const Header = () => {
  const links = [
    { name: 'projects', link: '#projects' },
    { name: 'about', link: '#about' },
    { name: 'contact', link: '#contact' },
    { name: 'theme' },
  ]

  const [linksRef, inView] = useInView({
    once: true,
    threshold: 0.5,
  })

  const transitions = useTransition(inView ? links : [], {
    from: { opacity: 0, translateY: 20 },
    enter: { opacity: 1, translateY: 0 },
    config: config.slow,
    trail: 200,
  })

  return (
    <header className={styles.header}>
      <div className={containerXl}>
        <nav className={styles.nav}>
          <ul className={styles.navLinks} ref={linksRef}>
            {transitions((style, { name, link }) =>
              name === 'theme' ? (
                <animated.li
                  className={cn(styles.navLink, styles.themeToggleButton)}
                  style={style}
                >
                  <ThemeToggleButton />
                </animated.li>
              ) : (
                <animated.li className={styles.navLink} style={style}>
                  <a className={buttonPlain} href={link}>
                    {name}
                  </a>
                </animated.li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
