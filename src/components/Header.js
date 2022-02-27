import * as React from 'react'
import { containerXl } from '../styles/utils/containers.module.scss'
import { buttonPlain } from '../styles/components/Button.module.scss'
import * as styles from '../styles/components/Header.module.scss'
import ThemeToggleButton from './ThemeToggleButton'

const Header = () => {
  const links = [
    { name: 'projects', link: '#projects' },
    { name: 'about', link: '#about' },
    { name: 'contact', link: '#contact' },
  ]

  return (
    <header className={styles.header}>
      <div className={containerXl}>
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            {links.map(({ name, link }, index) => (
              <li className={styles.navLink} key={index}>
                <a className={buttonPlain} href={link}>
                  {name}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggleButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
