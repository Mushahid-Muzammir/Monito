import React from 'react'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

const pets = [
  {
    id: "MO231",
    name: "Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: "6.900.000 VND",
    image: {image2}
  },
  {
    id: "MO502",
    name: "Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    image: {image3}
  },
  {
    id: "MO507",
    name: "Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    image: {image3}
  },
  {
    id: "MO102",
    name: "Poodle Tiny Sepia",
    gender: "Female",
    age: "02 months",
    price: "5.900.000 VND",
    image: {image4}
  },
];

const PetCard = ({ pet }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={pet.image}
        alt={pet.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{`${pet.id} - ${pet.name}`}</h3>
        <p className="text-sm text-gray-600">
          Gene: {pet.gender} • Age: {pet.age}
        </p>
        <p className="font-semibold text-blue-600 mt-2">{pet.price}</p>
      </div>
    </div>
  );
};

const Card = () => {
  return (    
    <div className='py-8 px-16'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>

  )
}
export default Card