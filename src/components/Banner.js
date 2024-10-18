import React from 'react'
import petPerson from '../assets/personwithpet.png'

const Banner = () => {
  return (
    <div>
    <section className="bg-yellow-50 flex items-center justify-between px-16 py-16">

        <div className="hidden md:block">
            <img
            src={petPerson}          
            alt="Person with pet"
            className="object-cover rounded-lg"
            />
        </div>

        <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-blue-900">
            One More Friend
            </h1>
            <h2 className="text-2xl font-bold text-blue-700 mt-2">
            Thousands More Fun!
            </h2>
            <p className="text-gray-600 mt-4">
            Having a pet means you have more joy, a new friend, a happy person who
            will always be with you to have fun. We have 200+ different pets that
            can meet your needs!
            </p>
            <div className="mt-6 flex space-x-4">
            <button className="bg-white text-blue-900 font-semibold px-6 py-2 border border-blue-900 rounded-full hover:bg-gray-100">
                View Intro
            </button>
            <button className="bg-blue-900 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-800">
                Explore Now
            </button>
            </div>
      </div>

      
    </section>
    </div>
  )
}

export default Banner