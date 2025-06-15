import * as React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import SharedHead from '../components/SharedHead'

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </Layout>
  )
}

export function Head() {
  return <SharedHead />
}

export default IndexPage
