import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFire, faClock, faTimes } from '@fortawesome/free-solid-svg-icons';
import { mobileLegendsData } from '../data/MobileLegends';
import { pubgData } from '../data/PUBG';
import { freeFireData } from '../data/FreeFire';
import { hokData } from '../data/Hok';
import { freeFireMaxData } from '../data/FreeFireMax.jsx';
import { useNavigate } from 'react-router-dom';

const allGameData = [mobileLegendsData, pubgData, freeFireData, hokData, freeFireMaxData].flat();

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      setSearchHistory([...searchHistory, searchQuery]);
      setSearchQuery('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClick = (id) => {
    navigate(`/game/${id}`);
    onClose();
  };

  const handleDeleteHistory = (index) => {
    setSearchHistory(searchHistory.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white w-11/12 max-w-xl p-6 rounded-lg shadow-lg relative py-4 max-h-[90vh] overflow-y-auto scrollbar-hidden">
        <button
          className="absolute top-1 right-2 bg-black w-6 h-6 rounded-lg flex justify-center items-center border-2 border-orange-500"
          onClick={onClose}
        >
          <span className="text-white text-sm leading-none">&times;</span>
        </button>
        
        <h2 className="text-lg font-semibold mb-4">Search</h2>

        <div className="relative w-full mb-4 flex">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-l px-10 py-2 text-gray-600 focus:outline-none focus:ring-0"
              placeholder="Cari sesuatu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <button 
            onClick={handleSearch} 
            className="bg-orange-400 text-white px-4 py-2 rounded-r hover:bg-orange-500"
          >
            Cari
          </button>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <FontAwesomeIcon icon={faFire} className="text-orange-500 mr-2" /> 
            Pencarian Populer
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {allGameData.map((game) => (
              <div 
                key={game.id} 
                className="border p-2 rounded-lg flex items-center space-x-3 bg-gray-100 hover:bg-gray-200 transition duration-300 cursor-pointer" 
                onClick={() => handleClick(game.id)}
              >
                <img src={game.image} alt={game.name} className="w-12 h-12 object-cover rounded-lg" />
                <div>
                  <p className="text-black font-semibold text-sm">{game.name}</p>
                  <p className="text-gray-600 text-xs">{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {searchHistory.length > 0 && (
          <div className="mt-6 max-h-[50vh] overflow-y-auto scrollbar-hidden">
            <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <FontAwesomeIcon icon={faClock} className="text-gray-500 mr-2" />
              History Pencarian
            </h3>
            <ul className="space-y-2">
              {searchHistory.map((item, index) => (
                <li 
                  key={index} 
                  className="text-gray-600 cursor-pointer bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg flex items-center justify-between"
                >
                  {item}
                  <button 
                    onClick={() => handleDeleteHistory(index)} 
                    className="text-gray-500 hover:text-gray-800 ml-2"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
