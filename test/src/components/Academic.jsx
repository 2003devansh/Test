import React from 'react'

const Academic = () => {
    const experience = {
        role: "Student" ,
        University: "GLA University" ,
        duration: "2021-2025" ,
        Course: "B.Tech CSE",
        description: "I am a B.tech student who's crazy about Full stack development and want to evolve my skills daily "
    } ; 
  return (
    <div>
      <section className='mb-8 bg-gray-800 p-4 rounded-xl shadow-lg'>
        <h2 className='text-2xl font-bold mb-2 text-white'>Academic Info</h2>
        <p className='text-white font-semibold'>{experience.role} at {experience.University}</p>
        <p className='text-gray-300 italic text-sm'>{experience.duration}</p>
        <p className='text-white'>{experience.description}</p>
      </section>
    </div>
  )
}

export default Academic
