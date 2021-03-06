import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MyWork from "./components/MyWork"
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
