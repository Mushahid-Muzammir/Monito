import React from 'react'

const navbar = () => {
  return (
    <nav className='bg-[#FCEED5]'>
        <div className= 'mx-12 px-12 py-4 flex justify-between items-center'>
          <div className='font-bold text-2xl '>
            <a href='#'>Monito</a><br/>
            <span className='text-gray-500 text-sm'>Pets for Best</span>
          </div>
        

        <div className='font-semibold space-x-6 md-flex'>
          <a href='#' className='text-gray-600 hover:text-blue-600'>Home</a>
          <a href='#' className='text-gray-600 hover:text-blue-600'>Category</a>
          <a href='#' className='text-gray-600 hover:text-blue-600'>About</a>
          <a href='#' className='text-gray-600 hover:text-blue-600'>Contact</a>
        </div>

        <div className='flex space-x-4 items-center'>
            <input type='text' placeholder='Search something here'
            className='px-4 py-2 border rounded-full text-sm text-gray-500 focus:outline-none' />
            <button className='bg-blue-600 text-white py-2 px-4 border rounded-full hover:bg-blue-700' >
              Join the community
            </button>

            <select>
              <option value="VND">VND</option>   
              <option value="USD">USD</option>    
            </select>
        </div>
        </div>
    </nav>
  )
}

export default navbar