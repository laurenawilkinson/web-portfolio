import * as React from 'react'
import { useInView, animated, config } from '@react-spring/web'

const FadeIn = ({ children, ...props }) => {
  const [ref, animation] = useInView(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
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
    <animated.div ref={ref} style={animation} {...props}>
      {children}
    </animated.div>
  )
}

export default FadeIn
