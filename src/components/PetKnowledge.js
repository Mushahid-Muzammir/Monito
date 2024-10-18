import React from 'react';
import img1 from '../assets/petK1.png'
import img2 from '../assets/petK2.png'
import img3 from '../assets/petK3.png'


const articles = [
    {
      id: 1,
      image: {img1},
      category: 'Pet Knowledge',
      title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
      description:
        'The Pomeranian, also known as the Pomeranian [Pom dog], is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circuit...',
    },
    {
      id: 2,
      image: {img2},
      category: 'Pet Knowledge',
      title: 'Dog Diet You Need To Know',
      description:
        'Dividing a dog diet may seem simple at first, but there are some things you should know so that your dog can have all the nutrients in the diet. For those who are still...',
    },
    {
      id: 3,
      image: {img3}, 
      category: 'Pet Knowledge',
      title: 'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
      description:
        'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.',
    },
  ];

const PetKnowledge = () => {
  return (
    <div>
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Useful Pet Knowledge</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article) => (
            <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
                />
                <div className="p-4">
                <span className="inline-block bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded-full">
                    {article.category}
                </span>
                <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{article.description}</p>
                </div>
            </div>
            ))}
        </div>
        <div className="text-right mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            View more
            </button>
        </div>
      </div>
    </div>
  )
}
export default PetKnowledge