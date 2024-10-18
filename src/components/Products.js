import React from 'react'
import image2 from '../assets/p2.png'
import image3 from '../assets/p3.png'
import image4 from '../assets/p4.png'
import image5 from '../assets/p5.png'


const products = [
  {
    id: "MO231",
    name: "Reflex Plus Adult Cat Food Salmon",
    size: "09 g",
    price: "6.900.000 VND",
    image: {image2}
  },
  {
    id: "MO502",
    name: "Reflex Plus Adult Cat Food Salmon",
    size: "04 g",
    price: "3.900.000 VND",
    image: {image3}
  },
  {
    id: "MO507",
    name: "Cat scratching ball toy kitten sisal rope ball",
    size: "02 g",
    price: "3.900.000 VND",
    image: {image4}
  },
  {
    id: "MO102",
    name: "Cute Pet Cat Warm Nest",
    size: "05 g",
    price: "5.900.000 VND",
    image: {image5}
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{`${product.id} - ${product.name}`}</h3>
        <p className="text-sm text-gray-600">
         size: {product.size}
        </p>
        <p className="font-semibold text-blue-600 mt-2">{product.price}</p>
      </div>
    </div>
  );
};

const Card = () => {
  return (    
    <div className='py-8 px-16'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
export default Card