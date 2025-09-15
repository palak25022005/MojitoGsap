import React from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import {ScrollTrigger, SplitText} from 'gsap/all'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
    </main>
  )
}

export default App
