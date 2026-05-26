import React from 'react'
import { useInView, animated, config } from '@react-spring/web'

interface FadeInLeftProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const FadeInLeft = React.forwardRef<HTMLDivElement, FadeInLeftProps>(
  ({ children, ...props }) => {
    const [ref, animation] = useInView(
      () => ({
        from: {
          translateX: -50,
          opacity: 0,
        },
        to: {
          translateX: 0,
          opacity: 1,
        },
        config: config.slow,
      }),
      {
        once: true,
        amount: 0.5,
      }
    )

    return (
      <animated.div ref={ref} style={animation} {...props}>
        {children}
      </animated.div>
    )
  }
)

FadeInLeft.displayName = 'FadeInLeft'

export default FadeInLeft
