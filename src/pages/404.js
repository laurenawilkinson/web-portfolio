import * as React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { buttonMain } from '../styles/components/Button.module.scss'
import { containerSm } from '../styles/utils/containers.module.scss'
import * as styles from '../styles/pages/NotFound.module.scss'
import { headingXl } from '../styles/utils/typography.module.scss'
import cn from 'classnames'
import SharedHead from '../components/SharedHead'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={cn(containerSm, styles.container)}>
        <h1 className={headingXl}>Not Found</h1>
        <p>We couldn't find that page!</p>
        <Link to="/" className={buttonMain}>
          Back to Home
        </Link>
      </div>
    </Layout>
  )
}

export function Head() {
  return <SharedHead title="Not Found" />
}

export default NotFoundPage
