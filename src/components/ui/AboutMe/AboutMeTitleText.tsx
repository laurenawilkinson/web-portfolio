import { animated, useSpring } from '@react-spring/web'
import * as React from 'react'
import { useEffect, useState } from 'react'

const animationDuration = 500
const displayDuration = 5000

const AboutMeTitleText = () => {
  const titles = ['Hey!', 'Salut!', 'こんにちは！']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  const spring = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: animationDuration },
  })

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => setVisible(false), displayDuration)
    const nextTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
      setVisible(true)
    }, displayDuration + animationDuration)

    return () => {
      clearTimeout(fadeOutTimeout)
      clearTimeout(nextTimeout)
    }
  }, [currentIndex])

  return <animated.span style={spring}>{titles[currentIndex]}</animated.span>
}

export default AboutMeTitleText
