// src/components/Treding.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { trendingProducts } from '../data/Product'; // Pastikan data ini sesuai

function Treding() {
  const navigate = useNavigate();

  const handleClick = (productId) => {
    navigate(`/game/${productId}`); // Mengarahkan ke halaman detail game
  };

  return (
    <div className="mt-8 w-full max-w-8xl px-2">
      <h2 className="text-3xl font-bold text-white mb-6">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {trendingProducts.slice(0, 9).map((product) => (
          <div
            key={product.id}
            className="border-2 border-gray-300 rounded-2xl bg-gray-200 p-2 flex items-center cursor-pointer hover:border-2 hover:border-orange-500"
            onClick={() => handleClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-lg mr-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Treding;
