import React from 'react';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="relative p-8 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="loader absolute"></div>
          <p className="text-white font-bold text-2xl z-10">ISGOOD</p>
        </div>
      </div>
      <style jsx>{`
        .loader {
          border: 8px solid transparent; /* Hilangkan border dengan menggunakan transparent dan perbesar ukuran border */
          border-top: 8px solid #ff4500; /* Warna loader */
          border-radius: 50%;
          width: 120px; /* Ukuran loader yang lebih besar */
          height: 120px; /* Ukuran loader yang lebih besar */
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
export default LoadingPage;