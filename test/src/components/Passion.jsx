import React from 'react'

const Passion = () => {
    const passion = ["Coding", "open source" , "Full Stack Developmennt"]
  return (
    <div>
      <section className='mb-8 bg-gray-800 p-4 rounded-xl shadow-lg'>
        <h2 className='text-2xl font-bold mb-2 text-white'>Passion</h2>
        <ul className='text-white list-disc list-inside'>
        {passion.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
       </ul>
      </section>
    </div>
  )
}

export default Passion
