import React from 'react'

const Hobbies = () => {
    const hobbies = ["Playing", "Book Reading" , "Coding" ,"Music"]
  return (
    <div>
      <section className='mb-8 bg-gray-800 p-4 rounded-xl shadow-lg'>
        <h2 className='text-2xl font-bold mb-2 text-white'>Hobbies</h2>
        <ul className='text-white list-disc list-inside'>
        {hobbies.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
       </ul>
      </section>
    </div>
  )
}

export default Hobbies
