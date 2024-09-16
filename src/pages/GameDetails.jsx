import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mobileLegendsData } from '../data/MobileLegends';
import { pubgData } from '../data/PUBG';
import { freeFireData } from '../data/FreeFire';
import { hokData } from '../data/Hok';
import { BstationData } from '../data/BstationData';
import { NetflixData } from '../data/NetflixData';
import { TinderData } from '../data/TinderData';
import { VidioData } from '../data/VidioData';
import { ViuData } from '../data/ViuData';
import { WetvData } from '../data/WetvData';
import { useTransactionStore } from '../store/useTransactionStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faBolt, faHeadphones, faGlobe } from '@fortawesome/free-solid-svg-icons';
import bgml2 from '../assets/image/bg5.webp';
import Transaction from './Transaction';

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const allGameData = [mobileLegendsData, pubgData, freeFireData, hokData, BstationData, NetflixData, TinderData, VidioData, ViuData, WetvData];
  const game = allGameData.find((game) => game.id === parseInt(id));
  const setTransactionProduct = useTransactionStore((state) => state.setSelectedProduct);

  if (!game) {
    return <p>Game not found</p>;
  }

 
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleConfirmPurchase = () => {
    setTransactionProduct({ game: game.name, product: selectedProduct });
    setIsModalOpen(false); // Tutup modal setelah konfirmasi
  };
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Bagian gambar header */}
      <div className="relative">
        <img src={game.background} alt={game.name} className="w-full h-[340px] object-cover bg-center" />
      </div>

      <div className="relative bg-cover bg-center h-[162px]" style={{ backgroundImage: `url(${bgml2})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center space-x-6 px-4 ml-8">
          {/* Gambar di sebelah kiri */}
          <img src={game.image} alt={game.name} className="w-28 h-28" />

          {/* Teks di sebelah kanan */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl font-bold mb-2">{game.name}</h1>
            <h3 className="text-lg text-gray-300">{game.description}</h3>

            {/* Informasi tambahan */}
            <div className="flex space-x-6 mt-2">
              <p className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faBolt} className="text-yellow-400" />
                <span>Proses cepat</span>
              </p>
              <p className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faHeadphones} className="text-blue-400" />
                <span>Layanan 24/7</span>
              </p>
              <p className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faGlobe} className="text-green-400" />
                <span>Region Indonesia</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian konten utama */}
      <div className="p-6">
        {/* <div className="py-2">
          <RedeemDiscount />
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bagian Kiri (Deskripsi dan Ulasan) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Dropdown untuk Deskripsi */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg">
              <button
                className="w-full flex items-center justify-between bg-gray-700 p-3 rounded-t-lg text-sm font-semibold"
                onClick={toggleDropdown}
              >
                <span>Deskripsi dan Cara Melakukan Transaksi</span>
                <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
              </button>
              {isDropdownOpen && (
                <div className="p-4 text-gray-300">
                  <p>{game.description}</p>
                  <h3 className="font-bold mt-4">Cara melakukan transaksi:</h3>
                  <ul className="list-disc list-inside ml-4">
                    <li>Pilih produk dari daftar di sebelah kanan.</li>
                    <li>Klik "Buy Now" untuk melakukan pembelian.</li>
                    <li>Ikuti instruksi untuk menyelesaikan pembayaran.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Bagian Ulasan Pengguna */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <Transaction />
            </div>  
          </div>

          {/* Bagian Kanan (Produk) */}
          <div className="lg:col-span-2 bg-gray-800 rounded-lg">
            <div className="bg-gray-700 rounded-t-lg relative">
              <div className="absolute top-0 left-0 bg-orange-500 w-10 p-4 text-center h-[60px] rounded-tl-lg">
                <p className="text-lg text-gray-700 font-bold">1</p>
              </div>
              <h1 className="text-white p-4 text-xl font-semibold pl-12">Pilih Nominal</h1>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {game.products.map((product) => (
                  <div
                    key={product.id}
                    className="border-2 border-gray-700 p-4 rounded-lg hover:border-orange-500 transition ease-in-out duration-300 cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="flex items-center">
                      <div className="flex-1">
                        <h2 className="font-bold text-lg mb-2 text-white">{product.name}</h2>
                        <p className="text-gray-400">Price: Rp {product.price.toLocaleString()}</p>
                      </div>
                      <img src={product.icon} alt={product.name} className="w-12 h-12 ml-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Konfirmasi Pembelian */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Konfirmasi Pembelian</h2>
            <div className="flex items-center mb-4">
              <img src={selectedProduct.icon} alt={selectedProduct.name} className="w-20 h-20 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{selectedProduct.name}</h3>
                <p className="text-gray-400">Price: Rp {selectedProduct.price.toLocaleString()}</p>
              </div>
            </div>
            <p className="mb-4">Apakah Anda yakin ingin membeli produk ini?</p>
            <div className="flex justify-end space-x-4">
              <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded" onClick={handleCloseModal}>
                Batal
              </button>
              <button className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded" onClick={handleConfirmPurchase}>
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetails;
