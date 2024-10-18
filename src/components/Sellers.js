import React from 'react'

const Sellers = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="text-center mb-12">
        <h4 className="text-lg font-semibold mb-4">
          Proud to be part of <span className="text-blue-500">Pet Sellers</span>
        </h4>
        <div className="flex justify-center items-center space-x-6">
          <img src="/path-to-logo/sheba.png" alt="Sheba" className="w-16 h-auto" />
          <img src="/path-to-logo/whiskas.png" alt="Whiskas" className="w-[114px] h-[114px]" />
          <img src="/path-to-logo/bakers.png" alt="Bakers" className="w-16 h-auto" />
          <img src="/path-to-logo/felix.png" alt="Felix" className="w-16 h-auto" />
          <img src="/path-to-logo/good-boy.png" alt="Good Boy" className="w-16 h-auto" />
          <img src="/path-to-logo/butchers.png" alt="Butchers" className="w-16 h-auto" />
          <img src="/path-to-logo/pedigree.png" alt="Pedigree" className="w-16 h-auto" />
        </div>
        <a
          href="/sellers"
          className="inline-block mt-4 text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-300"
        >
          View all our sellers
        </a>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg flex justify-between items-center">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">
            Adoption <span className="inline-block">🐾</span>
          </h2>
          <p className="text-lg font-medium mb-2">We Need Help. So Do They.</p>
          <p className="text-md mb-6">
            Adopt a pet and give it a home, it will love you back unconditionally.
          </p>
          <div className="flex space-x-4">
            <a
              href="/explore"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Explore Now
            </a>
            <a
              href="/intro"
              className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              View Intro
            </a>
          </div>
        </div>
        <div className="w-[300px]">
          <img src="/path-to-image/holding-hands.png" alt="Human and pet holding hands" className="w-full h-auto" />
        </div>
      </section>
    </div>
  )
}

export default Sellers