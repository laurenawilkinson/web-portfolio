import React, { useState, useEffect } from 'react'
import Icon from './utils/Icon'
import { buttonIcon } from '../styles/components/Button.module.scss'

const getTheme = () => {
  return typeof window !== 'undefined' ? localStorage.getItem('theme') : null
}

const ThemeToggleButton: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  const setDarkThemeLocally = (isDark: boolean) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }

    setDarkTheme(isDark)
  }

  const setDarkTheme = (isDark: boolean) => {
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.body.classList.add('dark-theme')
        document.body.classList.remove('light-theme')
      } else {
        document.body.classList.remove('dark-theme')
        document.body.classList.add('light-theme')
      }
    }

    setIsDarkTheme(isDark)
  }

  const toggleState = () => {
    setDarkThemeLocally(!isDarkTheme)
  }

  useEffect(() => {
    const storedTheme = getTheme()

    if (storedTheme === 'dark') return setDarkTheme(true)
    else if (storedTheme === 'light') return setDarkTheme(false)

    if (typeof window !== 'undefined' && window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        setIsDarkTheme(true)
      else if (window.matchMedia('(prefers-color-scheme: light)').matches)
        setIsDarkTheme(false)
    }
  }, [])

  return (
    <button
      className={buttonIcon}
      onClick={toggleState}
      aria-label={
        'Switch page theme to ' + isDarkTheme ? 'light mode' : 'dark mode'
      }
    >
      <Icon>{isDarkTheme ? 'dark_mode' : 'light_mode'}</Icon>
    </button>
  )
}

export default ThemeToggleButton
