import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faChartSimple, faUser, faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import { useLoading } from '../components/LoadingContext';

const Navbar = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();
  
  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);
  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const handleNavigation = (path) => {
    showLoading();
    setTimeout(() => {
      navigate(path);
      hideLoading();
    }, 1000);
  };

  return (
    <div>
      {/* Navbar Atas */}
      <div className="bg-black bg-opacity-75 text-white fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-4 md:p-0 relative">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <h1>ISGOOD</h1>
          </div>
          
          {/* Menu Navigasi (untuk desktop) */}
          <nav className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              onClick={() => handleNavigation('/')}
              className={({ isActive }) =>
                `flex items-center space-x-2 pb-5 mt-4 border-b-2 ${isActive ? 'text-orange-400 border-b-orange-400' : 'border-transparent text-white hover:border-orange-400 hover:text-orange-400'}` 
              }
            >
              <FontAwesomeIcon icon={faHome} />
              <span>Beranda</span>
            </NavLink>
            <NavLink
              to="/caritransaksi"
              onClick={() => handleNavigation('/caritransaksi')}
              className={({ isActive }) =>
                `flex items-center space-x-2 pb-5 mt-4 border-b-2 ${isActive ? 'text-orange-400 border-b-orange-400' : 'border-transparent text-white hover:border-orange-400 hover:text-orange-400'}` 
              }
            >
              <FontAwesomeIcon icon={faSearch} />
              <span>Cari Transaksi</span>
            </NavLink>
            <NavLink
              to="/leaderboard"
              onClick={() => handleNavigation('/leaderboard')}
              className={({ isActive }) =>
                `flex items-center space-x-2 pb-5 mt-4 border-b-2 ${isActive ? 'text-orange-400 border-b-orange-400' : 'border-transparent text-white hover:border-orange-400 hover:text-orange-400'}` 
              }
            >
              <FontAwesomeIcon icon={faChartSimple} />
              <span>Leaderboard</span>
            </NavLink>
          </nav>

          {/* Tombol Pencarian di Kanan Atas */}
          <div
              onClick={openSearchModal}
              className="absolute right-4 top-4 flex items-center border px-4 py-1 border-gray-600 rounded cursor-pointer md:hidden"
            >
              <FontAwesomeIcon icon={faSearch} className="mr-2 text-white" />
              <span className="text-white">Search</span>
            </div>

          {/* Tombol Kanan (Masuk, Daftar) hanya tampil di desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div
              onClick={openSearchModal}
              className="right-4 top-4 flex items-center border px-4 py-1 border-gray-600 rounded cursor-pointer"
            >
              <FontAwesomeIcon icon={faSearch} className="mr-2 text-white" />
              <span className="text-white">Search</span>
            </div>
            <button
              onClick={openLoginModal}
              className="bg-white text-black px-4 py-1 rounded hover:bg-orange-400 hover:text-white"
            >
              Masuk
            </button>
            <button
              onClick={openRegisterModal}
              className="bg-orange-400 text-white px-4 py-1 rounded hover:bg-white hover:text-black"
            >
              Daftar
            </button>
          </div>

          {/* Modals */}
          <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
          <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
          <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </div>
      </div>

      {/* Bottom Navigation (untuk mobile) */}
      <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-75 text-white md:hidden z-50">
        <div className="container mx-auto flex justify-around items-center py-2">
          <NavLink
            to="/caritransaksi"
            onClick={() => handleNavigation('/caritransaksi')}
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 p-2 rounded-lg transition-transform transform hover:scale-110 ${isActive ? 'bg-orange-500' : 'text-gray-300 hover:text-orange-400'}` 
            }
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-xl mb-1" />
            <span className="text-xs">Pesanan</span>
          </NavLink>
          <NavLink
            to="/leaderboard"
            onClick={() => handleNavigation('/leaderboard')}
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 p-2 rounded-lg transition-transform transform hover:scale-110 ${isActive ? 'bg-orange-500' : 'text-gray-300 hover:text-orange-400'}` 
            }
          >
            <FontAwesomeIcon icon={faChartSimple} className="text-xl mb-1" />
            <span className="text-xs">Leaderboard</span>
          </NavLink>
          <NavLink
            to="/"
            onClick={() => handleNavigation('/')}
            className={({ isActive }) =>
              `flex flex-col items-center space-y-1 p-2 rounded-lg transition-transform transform hover:scale-110 ${isActive ? 'bg-orange-500' : 'text-white hover:text-orange-400'}` 
            }
          >
            <FontAwesomeIcon icon={faChartSimple} className="text-xl mb-1" />
            <span className="text-xs">Dashboard</span>
          </NavLink>
          <button
            onClick={openLoginModal}
            className="flex flex-col items-center space-y-1 p-2 rounded-lg transition-transform transform hover:scale-110 text-gray-300 hover:text-orange-400"
          >
            <FontAwesomeIcon icon={faSignInAlt} className="text-xl mb-1" />
            <span className="text-xs">Login</span>
          </button>
          <button
            onClick={openRegisterModal}
            className="flex flex-col items-center space-y-1 p-2 rounded-lg transition-transform transform hover:scale-110 text-gray-300 hover:text-orange-400"
          >
            <FontAwesomeIcon icon={faUser} className="text-xl mb-1" />
            <span className="text-xs">Daftar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
