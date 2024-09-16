import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const ProductCard = ({ game }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game/${game.id}`);
  };

  return (
    <div 
      className="border-2 shadow-lg p-3 rounded-lg bg-gray-300 cursor-pointer flex flex-col justify-between hover:border-orange-500 transition-colors duration-200 ease-in-out h-full"
      onClick={handleClick}
    >
      <div className="flex items-center space-x-4">
        {/* Gambar di sebelah kiri */}
        <img 
          src={game.image} 
          alt={game.name} 
          className="w-16 h-16 object-cover rounded-lg" 
        />

        {/* Teks di sebelah kanan */}
        <div>
          <h2 className="font-bold text-lg">{game.name}</h2>
          <p className="text-sm text-gray-600">{game.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
