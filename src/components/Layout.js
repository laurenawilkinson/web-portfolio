import * as React from "react"
import "../styles/globals.scss"
import Header from './Header'

const Layout = ({ pageTitle = 'Lauren Wilkinson | Front-End Developer', children }) => {
  return (
    <main>
      <title>{pageTitle}</title>

      <Header />

      { children }
    </main>
  )
}

export default Layout
