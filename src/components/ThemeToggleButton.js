import * as React from 'react'
import { useState, useEffect } from 'react'
import Icon from './utils/Icon'
import { buttonIcon } from '../styles/components/Button.module.scss'

const getTheme = () => {
  return localStorage.getItem('theme')
}

const ThemeToggleButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const setDarkThemeLocally = (isDark) => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')

    setDarkTheme(isDark)
  }

  const setDarkTheme = (isDark) => {
    if (isDark) {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
    } else {
      document.body.classList.remove('dark-theme')
      document.body.classList.add('light-theme')
    }

    setIsDarkTheme(isDark)
  }

  const toggleState = () => {
    // Set theme in LS as it was an intentional change
    setDarkThemeLocally(!isDarkTheme)
  }

  useEffect(() => {
    // Check for localStorage theme
    const storedTheme = getTheme()

    if (storedTheme === 'dark') return setDarkTheme(true)
    else if (storedTheme === 'light') return setDarkTheme(false)

    // If no stored theme, attempt to use device theme
    if (window.matchMedia) {
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
      aria-label="Switch page theme"
    >
      <Icon>{isDarkTheme ? 'dark_mode' : 'light_mode'}</Icon>
    </button>
  )
}

export default ThemeToggleButton
