import React from 'react'
import { Explore, Footer, Hero, Memory, Navbar } from './components'
import { hero, memory, navlinks, placesAPI } from './data/travigodata'

const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI}/>
      <Footer/>
    </div>
  )
}

export default App
