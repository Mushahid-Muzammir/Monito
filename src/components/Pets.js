import React from 'react'

const Pets = () => {
  return (
    <div className='px-16 '>
        <div className='w-full flex justify-between '>
            <div>
            <span>What's new?</span>
            <h1 className='font-medium text-[#003459] text-2xl'>Take A Look At Some Of Our Pets </h1>
            </div>
            <div>
            <button className='border-2 border-[#003459] border rounded-full px-6 pr-12 py-2 text-[#003459]'>View More</button>
            </div>
        </div>
    </div>
  )
}

export default Pets