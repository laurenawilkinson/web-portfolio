import * as React from "react"
import { useState } from "react"
import Icon from './utils/Icon'
import { buttonIcon } from '../styles/components/Button.module.scss'

const ThemeToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleState = () => {
    const newState = !isToggled;

    newState
      ? document.body.classList.add('dark-theme')
      : document.body.classList.remove('dark-theme')

    setIsToggled(newState);
  }

  return (
    <button className={buttonIcon} onClick={toggleState} aria-label="Switch page theme">
      <Icon>{ isToggled ? 'dark_mode' : 'light_mode' }</Icon>
    </button>
  )
}

export default ThemeToggleButton
