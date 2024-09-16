import React, { useState, useEffect } from 'react';
import { useTransactionStore } from '../store/useTransactionStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { mobileLegendsData } from '../data/MobileLegends';

const DropdownItem = ({ src, alt, subtitle, price }) => (
  <div
    className="border rounded-lg bg-white cursor-pointer flex flex-col items-start p-4 mb-2 shadow-sm hover:shadow-lg hover:border-orange-500 transition-all duration-200 ease-in-out"
  >
    <img
      src={src}
      alt={alt}
      className="w-auto h-10 object-cover rounded-lg mb-2"
    />
    <div className="text-left w-full">
      <p className="text-xs font-bold text-gray-700">Price: Rp {price.toLocaleString()}</p>
      <div className='border-b border-gray-600'></div>
      <p className="text-xs italic text-gray-500">{subtitle}</p>
    </div>
  </div>
);

const Dropdown = ({ isOpen, toggleDropdown, title, items }) => (
  <div className="bg-gray-800 rounded-lg mb-4">
    <button
      className="w-full flex items-center justify-between bg-gray-700 text-white p-3 rounded-t-lg text-sm font-semibold"
      onClick={toggleDropdown}
      aria-expanded={isOpen}
      aria-controls={`${title}-dropdown`}
    >
      <span>{title}</span>
      <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
    </button>
    {isOpen && (
      <div id={`${title}-dropdown`} className="p-4 text-gray-300">
        {items.map((item, index) => (
          <DropdownItem
            key={index}
            src={item.src}
            alt={item.alt}
            subtitle={item.subtitle}
            price={item.price}
          />
        ))}
      </div>
    )}
  </div>
);

const Transaction = () => {
  const selectedProduct = useTransactionStore((state) => state.selectedProduct);
  const clearTransaction = useTransactionStore((state) => state.clearTransaction);
  const navigate = useNavigate();
  const [gameId, setGameId] = useState('');
  const [server, setServer] = useState('');
  // const [paymentMethod, setPaymentMethod] = useState('');
  const [productPrice, setProductPrice] = useState(selectedProduct?.product.price || 0);
  const [promoCode, setPromoCode] = useState(''); // state untuk kode promo
  const [contactInfo, setContactInfo] = useState('');

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setProductPrice(selectedProduct.product.price);
    }
  }, [selectedProduct]);

  const handleConfirmTransaction = () => {
    if (!gameId || !server || !paymentMethod) {
      alert('Please fill in all fields.');
      return;
    }

    alert(
      `Transaction successful for ${selectedProduct.game} - ${selectedProduct.product.name}. 
      Game ID: ${gameId}, Server: ${server}, Payment Method: ${paymentMethod}, 
      Promo Code: ${promoCode}, Amount: Rp ${productPrice.toLocaleString()}`
    );
    clearTransaction();
    navigate('/');
  };

  if (!selectedProduct) {
    return <p>No product selected. Go back to the home page.</p>;
  }

  return (
    <div className="max-w-xl mx-auto ">
      <h1 className="text-2xl font-extrabold mb-6 text-center text-white tracking-tight">
        Transaction Details
      </h1>
      {/* Input Data Akun */}
      <div className="py-2">
        <div className="bg-gray-900 rounded-lg">
          <div className="bg-gray-700 w-full rounded-tl-lg rounded-tr-lg flex">
            <div className="bg-orange-500 p-4 rounded-tl-lg">
              <p className="text-lg text-gray-700 font-bold">2</p>
            </div>
            <p className="text-white text-center p-2 mt-2">Masukan Data Akun</p>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-white">ID</label>
              <input
                type="text"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
                className="bg-gray-700 rounded-lg p-3 w-full h-8 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                placeholder="Ketikan ID"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Server</label>
              <input
                type="text"
                value={server}
                onChange={(e) => setServer(e.target.value)}
                className="bg-gray-700 rounded-lg p-3 w-full h-8 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                placeholder="Ketikan Server"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pilihan Pembayaran */}
      <div className="bg-gray-900 rounded-lg">
        <div className="bg-gray-700 w-full rounded-tl-lg rounded-tr-lg flex">
          <div className="bg-orange-500 p-4 rounded-tl-lg">
            <p className="text-lg text-gray-700 font-bold">3</p>
          </div>
          <p className="text-white text-center p-2 mt-2">Pilih Pembayaran</p>
        </div>
        <div className="p-4 space-y-4">
          <Dropdown
            isOpen={isDropdownOpen1}
            toggleDropdown={() => setIsDropdownOpen1(!isDropdownOpen1)}
            title="Virtual Accounts"
            items={mobileLegendsData.virtualAccounts.map(item => ({
              ...item,
              price: productPrice
            }))}
          />
          <Dropdown
            isOpen={isDropdownOpen2}
            toggleDropdown={() => setIsDropdownOpen2(!isDropdownOpen2)}
            title="E-Wallets"
            items={mobileLegendsData.wallets.map(item => ({
              ...item,
              price: productPrice
            }))}
          />
          <Dropdown
            isOpen={isDropdownOpen3}
            toggleDropdown={() => setIsDropdownOpen3(!isDropdownOpen3)}
            title="Convenience Stores"
            items={mobileLegendsData.convenienceStores.map(item => ({
              ...item,
              price: productPrice
            }))}
          />
          <Dropdown
            isOpen={isDropdownOpen4}
            toggleDropdown={() => setIsDropdownOpen4(!isDropdownOpen4)}
            title="Pulsa"
            items={mobileLegendsData.pulsa.map(item => ({
              ...item,
              price: productPrice
            }))}
          />
        </div>
      </div>

      <div className="py-2">
        <div className="bg-gray-900 rounded-lg">
          <div className="bg-gray-700 w-full rounded-tl-lg rounded-tr-lg flex">
            <div className="bg-orange-500 p-4 rounded-tl-lg">
              <p className="text-lg text-gray-700 font-bold">4</p>
            </div>
            <p className="text-white text-center p-2 mt-2">Masukan Kontak</p>
          </div>
          <div className="p-4">
            <label className="block text-sm font-medium mb-2 text-white">Nomor Telepon atau Email</label>
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="bg-gray-700 rounded-lg p-3 w-full h-8 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
              placeholder="Masukan nomor telepon atau email"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-gray-900 rounded-lg">
          <div className="bg-gray-700 w-full rounded-tl-lg rounded-tr-lg flex">
            <div className="bg-orange-500 p-4 rounded-tl-lg">
              <p className="text-lg text-gray-700 font-bold">5</p>
            </div>
            <p className="text-white text-center p-2 mt-2">Kode Promo</p>
          </div>
          <div className="p-4">
            <label className="block text-sm font-medium mb-2 text-white">masukan Kode Promo</label>
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setPromoCode(e.target.value)}
              className="bg-gray-700 rounded-lg p-3 w-full h-8 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
              placeholder="Masukan nomor telepon atau email"
            />
          </div>
        </div>
      </div>

      <div className='py-2'>
        <div className='bg-gray-900 rounded-lg p-2'>
          <div className="flex items-center">
            <img
              src={selectedProduct.product.icon}
              alt={selectedProduct.product.name}
              className="w-20 h-20 mr-4"
            />
            <div>
              <p className="text-lg font-bold text-white">
                <span>{selectedProduct.game}</span> 
              </p>
              <p className="text-base font-bold text-yellow-500">
                <span>Rp {productPrice.toLocaleString()}</span>
              </p>
              <p className="text-sm font-bold text-white">
                <span>{selectedProduct.product.name}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-1 rounded-lg font-bold text-base shadow-lg transition-all duration-300"
        onClick={handleConfirmTransaction}
      >
        Confirm Transaction
      </button>
    </div>
  );
};

export default Transaction;
