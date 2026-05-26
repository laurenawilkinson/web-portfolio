import React from 'react'
import { useInView, animated, config } from '@react-spring/web'

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const FadeIn = React.forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, ...props }) => {
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

FadeIn.displayName = 'FadeIn'

export default FadeIn
