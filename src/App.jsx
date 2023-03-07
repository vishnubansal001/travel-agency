import React from 'react'
import { Footer, Hero, Navbar } from './components'
import { hero, navlinks } from './data/travigodata'

const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Footer/>
    </div>
  )
}

export default App
