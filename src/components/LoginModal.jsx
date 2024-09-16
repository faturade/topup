import React, { useEffect } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-100 rounded-lg shadow-lg w-96 p-6 relative">
        <button
          className="absolute top-1 right-2 bg-black w-6 h-6 rounded-lg border-2 border-orange-500 flex justify-center items-center"
          onClick={onClose}
        >
          <div className="w-full h-full flex justify-center items-center">
            <span className="text-white text-lg leading-none mb-1 ml-[1px]" style={{ lineHeight: '1' }}>
              &times;
            </span>
          </div>
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Masuk</h2>
        <form>
          <div className="mb-4 text-black">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Masukkan username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginModal;