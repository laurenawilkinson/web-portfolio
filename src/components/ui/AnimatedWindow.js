import * as React from 'react'
import WindowSvg from '../../assets/svg/window.svg'
import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web'

const AnimatedWindow = () => {
  const scaleOpacityRef = useSpringRef()
  const bobRef = useSpringRef()

  const scaleOpacityAnimation = useSpring({
    ref: scaleOpacityRef,
    from: { scale: 0.5, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    config: { tension: 280, friction: 60 },
  })

  const bobAnimation = useSpring({
    ref: bobRef,
    from: { translateY: -20 },
    to: async (next) => {
      while (1) {
        await next({ translateY: 0 })
        await next({ translateY: -20 })
      }
    },
    loop: { reverse: true },
    config: { tension: 300, friction: 20, duration: 1000 },
  })

  useChain([scaleOpacityRef, bobRef], [0, 0.5])

  return (
    <animated.div style={{ ...scaleOpacityAnimation, ...bobAnimation }}>
      <WindowSvg />
    </animated.div>
  )
}

export default AnimatedWindow
