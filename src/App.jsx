import React from 'react'
import { Advertise, Explore, Footer, Hero, Memory, Navbar } from './components'
import { brands, hero, memory, navlinks, placesAPI } from './data/travigodata'

const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks}/>
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Explore title="Explore The Beauty of World" placesAPI={placesAPI}/>
      <Advertise brands={brands}/>
      <Footer/>
    </div>
  )
}

export default App
