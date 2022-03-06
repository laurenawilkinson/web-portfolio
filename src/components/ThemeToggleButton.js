import * as React from 'react'
import { useState, useEffect } from 'react'
import Icon from './utils/Icon'
import { buttonIcon } from '../styles/components/Button.module.scss'

const getTheme = () => {
  return localStorage.getItem('theme')
}

const ThemeToggleButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const setDarkTheme = (isDarkTheme = false) => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')

    isDarkTheme
      ? document.body.classList.add('dark-theme')
      : document.body.classList.remove('dark-theme')

    setIsDarkTheme(isDarkTheme)
  }

  const toggleState = () => {
    const newState = !isDarkTheme

    setDarkTheme(newState)
  }

  useEffect(() => {
    // Check for localStorage theme
    const storedTheme = getTheme()

    if (storedTheme === 'dark') return setDarkTheme(true)
    else if (storedTheme === 'light') return setDarkTheme(false)

    // If no stored theme, attempt to use device theme
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        setDarkTheme(true)
      else if (window.matchMedia('(prefers-color-scheme: light)').matches)
        setDarkTheme(false)
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
