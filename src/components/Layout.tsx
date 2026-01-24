import React from 'react'
import '../styles/globals.scss'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>
}

export default Layout
