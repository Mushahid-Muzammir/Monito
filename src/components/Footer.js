import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
 <footer className="bg-[#F9EEDB] p-6">
      <div className="container mx-auto">
        
        <div className="bg-[#002E56] text-white rounded-lg p-6 mb-8 flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-lg font-semibold mb-4 md:mb-0">
            Register Now So You Don’t Miss Our Programs
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 rounded-full w-full md:w-64 text-black mb-4 md:mb-0 md:mr-4"
            />
            <button className="bg-white text-[#002E56] px-6 py-2 rounded-full font-semibold">
              Subscribe Now
            </button>
          </div>
        </div>

        
        <div className="flex justify-center space-x-6 text-sm mb-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Category
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </div>

        
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaYoutube />
          </a>
        </div>

        
        <div className="text-center text-sm text-gray-600 mb-4">
          © 2022 Monito. All rights reserved.
        </div>

        <div className="flex justify-center space-x-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-800">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-800">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Footer