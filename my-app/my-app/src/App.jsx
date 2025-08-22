import { useState } from 'react'
// ...existing code...

// components
import Navbar  from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import InfoOne from './components/InfoOne'
import InfoTwo from './components/InfoTwo'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import GetinTouch from './components/GetinTouch'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <InfoOne />
      <InfoTwo />
      <CTA />
      <Testimonials />
      <GetinTouch />
      <Footer />
    </>
  )
}

export default App
