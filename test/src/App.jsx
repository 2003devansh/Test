import React from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Passion from './components/Passion'
import Academic from './components/Academic'

const App = () => {
  return (
    <div className='bg-gray-100'>
      <About />
      <Skills />
      <Hobbies />
      <Passion />
      <Academic />
    </div>
  )
}

export default App
