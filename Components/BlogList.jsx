'use client';
import React, { useState } from 'react';
import Image from 'next/image';
<img src="/Assets/fgr.png" alt="About" />

const BlogList = () => {
  const [menu, setMenu] = useState('All');

  // ✅ Static placeholder data
  const blogs = [
    {
      id: 1,
      image: '/sample1.jpg',
      title: 'Chocolate Pudding Delight',
      description: 'Rich and creamy pudding with a moist cake base.',
      category: 'Pudding',
    },
    {
      id: 2,
      image: '/sample2.jpg',
      title: 'Almond Bliss',
      description: 'A perfect fusion of almonds and soft kunafa layers.',
      category: 'Pudding',
    },
    {
      id: 3,
      image: '/sample3.jpg',
      title: 'Mini Cheese Croissant',
      description: 'Flaky croissants stuffed with gooey cheese.',
      category: 'Snacks',
    },
    {
      id: 4,
      image: '/sample4.jpg',
      title: 'Red Velvet Cake',
      description: 'Moist red velvet with layers of whipped cream.',
      category: 'Cakes',
    },
  ];

  return (
    <div className="relative">
      {/* Decorative flower image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-rotate z-10 w-96 h-96">
        <Image src={GrpfImage} alt="Flower" width={400} height={400} />
      </div>

      {/* Menu buttons */}
      <div className="flex justify-center gap-6 my-10 font-alegreya">
        {['All', 'Pudding', 'Snacks', 'Cakes'].map((cat) => (
          <button
            key={cat}
            onClick={() => setMenu(cat)}
            className={`py-1 px-4 rounded-sm ${
              menu === cat
                ? 'bg-[#2a664e] text-white'
                : 'bg-transparent text-black hover:bg-[#2a664e] hover:text-white'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Blog items */}
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => {
            const category = item.category?.toLowerCase() || '';
            return menu === 'All' || category === menu.toLowerCase();
          })
          .map((item) => (
            <div key={item.id} className="w-72 bg-white shadow-md rounded-lg p-4">
              <img src={item.image} alt={item.title} className="rounded-md mb-4 w-full h-40 object-cover" />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              <p className="mt-1 text-xs text-[#2a664e] font-semibold">{item.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
