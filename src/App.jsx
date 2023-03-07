import React from 'react'
import { Footer, Hero, Memory, Navbar } from './components'
import { hero, memory, navlinks } from './data/travigodata'

const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Footer/>
    </div>
  )
}

export default App
