import React from 'react'
import { animated, useInView, config } from '@react-spring/web'

const FeaturedProjectImage = ({ image, name }) => {
  const [ref, animation] = useInView(
    () => ({
      from: {
        scale: 0.8,
        opacity: 0,
      },
      to: {
        scale: 1,
        opacity: 1,
      },
      config: config.slow,
    }),
    {
      once: true,
      threshold: 0.5,
    }
  )

  return (
    <animated.figure ref={ref} style={animation}>
      <img src={`/images/projects/${image}`} alt={name} />
    </animated.figure>
  )
}

export default FeaturedProjectImage
