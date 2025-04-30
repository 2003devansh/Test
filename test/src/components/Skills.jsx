import React from 'react'

const Skills = () => {
    const skills = ["React.js" , "Tailwind", "Node" , "Express" , "Database"]
  return (
     <section className='mb-8 bg-gray-800 p-4 rounded-xl shadow-lg'>
       <h2 className='text-2xl font-bold mb-3 text-white'>Skills</h2>
       <ul className='text-white list-disc list-inside'>
        {skills.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
       </ul>
     </section>
  )
}

export default Skills
