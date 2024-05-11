import React from 'react'
import { animated, useInView, config } from '@react-spring/web'
import { backgroundColour } from '../../../styles/components/FeaturedProject.module.scss'

const FeaturedProjectBackground = () => {
  const [ref, backgroundAnimation] = useInView(
    () => ({
      from: {
        translateY: '-100%',
      },
      to: {
        translateY: '0',
      },
      config: { ...config.molasses },
    }),
    {
      once: true,
      threshold: 0.5,
    }
  )

  return (
    <div ref={ref}>
      <animated.div style={backgroundAnimation} className={backgroundColour} />
    </div>
  )
}

export default FeaturedProjectBackground
