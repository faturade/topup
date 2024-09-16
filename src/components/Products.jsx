import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mobileLegendsData } from '../data/MobileLegends';
import { freeFireData } from '../data/FreeFire';
import { freeFireMaxData } from '../data/FreeFireMax';
import { pubgData } from '../data/PUBG';
import { hokData } from '../data/Hok';
import { BstationData } from '../data/BstationData';
import { NetflixData } from '../data/NetflixData';
import { TinderData } from '../data/TinderData';
import { VidioData } from '../data/VidioData';
import { ViuData } from '../data/ViuData';
import { WetvData } from '../data/WetvData';

const Products = () => {
  const [activeTab, setActiveTab] = useState('topup');
  const navigate = useNavigate();

  const getGameData = () => {
    switch (activeTab) {
      case 'topup':
        return [
          { id: mobileLegendsData.id, name: 'Mobile Legends', image: mobileLegendsData.image, description: mobileLegendsData.description },
          { id: freeFireData.id, name: 'Free Fire', image: freeFireData.image, description: freeFireData.description },
          { id: freeFireMaxData.id, name: 'Free Fire Max', image: freeFireMaxData.image, description: freeFireMaxData.description },
          { id: pubgData.id, name: 'PUBG Mobile', image: pubgData.image, description: pubgData.description },
          { id: hokData.id, name: 'Honor of Kings', image: hokData.image, description: hokData.description }
        ];
      case 'voucher':
        return [
          { id: BstationData.id, name: 'Bstation', image: BstationData.image, description: BstationData.description },
          { id: NetflixData.id, name: 'Netflix', image: NetflixData.image, description: NetflixData.description },
          { id: TinderData.id, name: 'Tinder', image: TinderData.image, description: TinderData.description },
          { id: VidioData.id, name: 'Vidio', image: VidioData.image, description: VidioData.description },
          { id: ViuData.id, name: 'Viu', image: ViuData.image, description: ViuData.description },
          { id: WetvData.id, name: 'WeTV', image: WetvData.image, description: WetvData.description }
        ];
      case 'pulsa':
        return [];  // Tambahkan data yang sesuai di sini jika ada
      case 'kuota':
        return [];  // Tambahkan data yang sesuai di sini jika ada
      default:
        return [];
    }
  };

  const handleGameClick = (gameId) => {
    navigate(`/game/${gameId}`);
  };

  return (
    <div>
      <div className="w-full max-w-[1300px] mx-auto mt-8">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Products</h3>
          <nav className="text-white">
            <div className="flex flex-wrap justify-center items-center space-x-4">
              <button
                onClick={() => setActiveTab('topup')}
                className={`bg-gray-600 py-2 px-6 rounded-full ${activeTab === 'topup' ? 'bg-orange-400' : 'border-white'} hover:bg-orange-400 text-sm sm:text-base`}
                aria-selected={activeTab === 'topup'}
              >
                Topup
              </button>
              <button
                onClick={() => setActiveTab('voucher')}
                className={`bg-gray-600 py-2 px-6 rounded-full ${activeTab === 'voucher' ? 'bg-orange-400' : 'border-white'} hover:bg-orange-400 text-sm sm:text-base`}
                aria-selected={activeTab === 'voucher'}
              >
                Voucher
              </button>
              <button
                onClick={() => setActiveTab('pulsa')}
                className={`bg-gray-600 py-2 px-6 rounded-full ${activeTab === 'pulsa' ? 'bg-orange-400' : 'border-white'} hover:bg-orange-400 text-sm sm:text-base`}
                aria-selected={activeTab === 'pulsa'}
              >
                Pulsa
              </button>
              <button
                onClick={() => setActiveTab('kuota')}
                className={`bg-gray-600 py-2 px-6 rounded-full ${activeTab === 'kuota' ? 'bg-orange-400' : 'border-white'} hover:bg-orange-400 text-sm sm:text-base`}
                aria-selected={activeTab === 'kuota'}
              >
                Kuota
              </button>
            </div>
          </nav>
        </div>
      </div>

      {activeTab === 'topup' && (
        <div className="w-full max-w-[1300px] mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {getGameData().map((game) => (
              <div
                key={game.id}
                className="relative border border-gray-800 rounded-lg bg-gray-300 overflow-hidden cursor-pointer transition-transform transform hover:rotate-3 hover:scale-105 duration-300 hover:border-2 hover:border-orange-700"
                onClick={() => handleGameClick(game.id)}
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {game.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {game.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === 'voucher' && (
        <div className="w-full max-w-[1300px] mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {getGameData().map((game) => (
              <div
                key={game.id}
                className="relative border border-gray-800 rounded-lg bg-gray-300 overflow-hidden cursor-pointer transition-transform transform hover:rotate-3 hover:scale-105 duration-300 hover:border-2 hover:border-orange-700"
                onClick={() => handleGameClick(game.id)}
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {game.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {game.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
