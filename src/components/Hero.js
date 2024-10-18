import React from 'react'
import Wmn from '../assets/dog.png'

const Hero = () => {
  return (
    <div className='container mx-auto px-24 py-16 flex flex-col lg:flex-row items-center'>
        <div className="text-center lg:text-left lg:w-1/2 space-y-8">
        <div className='text-4xl md:text-6xl font-bold text-blue-900 '>
            <h1 style={{color:" #002A48"}}>One More Friend</h1>
            <h1 className='pt-3 font-medium' style={{color:" #002A48"}}>Thousands More Fun</h1>
        </div>
        <div className='w-[470px] h-18 space-y-6'>
            <p style={{color:"#242B33"}}>
            Having a pet means you have more joy, a new friend, 
            a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
            </p>
        </div>
        <div className='my-5 space-x-8'>
            <button className='px-6 py-3 border-2 border-[#003459] border rounded-full hover:text-white '>View Intro</button>
            <button className='bg-[#003459] px-6 py-3 border rounded-full text-white hover:bg-blue-900'>Explore Now</button>
        </div>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src={Wmn}
            alt="Person with Pet"
            className="w-full h-auto max-w-auto "
          />
        </div>
    </div>
  )
}

export default Hero