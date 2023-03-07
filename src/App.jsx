import React from 'react'
import { Footer, Main, Navbar } from './components'
import { hero } from './data/data'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main hero={hero}/>
      <Footer/>
    </div>
  )
}

export default App
