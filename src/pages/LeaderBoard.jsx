import React, { useState } from 'react';

const Leaderboard = () => {
  // Dummy data pembeli dengan jumlah pembelian
  const pembeliHarian = [
    { id: 1, nama: 'John Doe', totalPembelian: 20 },
    { id: 2, nama: 'Jane Smith', totalPembelian: 18 },
    { id: 3, nama: 'Alice Brown', totalPembelian: 15 },
    { id: 4, nama: 'Bob White', totalPembelian: 12 },
    { id: 5, nama: 'Tom Black', totalPembelian: 10 },
    { id: 6, nama: 'Emma Stone', totalPembelian: 9 },
    { id: 7, nama: 'Charlie Green', totalPembelian: 8 },
    { id: 8, nama: 'Olivia Blue', totalPembelian: 7 },
    { id: 9, nama: 'Sophia Yellow', totalPembelian: 6 },
    { id: 10, nama: 'Liam Pink', totalPembelian: 5 },
  ];

  const pembeliMingguan = [
    { id: 1, nama: 'John Doe', totalPembelian: 100 },
    { id: 2, nama: 'Jane Smith', totalPembelian: 90 },
    { id: 3, nama: 'Alice Brown', totalPembelian: 85 },
    { id: 4, nama: 'Bob White', totalPembelian: 80 },
    { id: 5, nama: 'Tom Black', totalPembelian: 75 },
    { id: 6, nama: 'Emma Stone', totalPembelian: 70 },
    { id: 7, nama: 'Charlie Green', totalPembelian: 65 },
    { id: 8, nama: 'Olivia Blue', totalPembelian: 60 },
    { id: 9, nama: 'Sophia Yellow', totalPembelian: 55 },
    { id: 10, nama: 'Liam Pink', totalPembelian: 50 },
  ];

  const pembeliBulanan = [
    { id: 1, nama: 'John Doe', totalPembelian: 400 },
    { id: 2, nama: 'Jane Smith', totalPembelian: 380 },
    { id: 3, nama: 'Alice Brown', totalPembelian: 360 },
    { id: 4, nama: 'Bob White', totalPembelian: 340 },
    { id: 5, nama: 'Tom Black', totalPembelian: 320 },
    { id: 6, nama: 'Emma Stone', totalPembelian: 300 },
    { id: 7, nama: 'Charlie Green', totalPembelian: 280 },
    { id: 8, nama: 'Olivia Blue', totalPembelian: 260 },
    { id: 9, nama: 'Sophia Yellow', totalPembelian: 240 },
    { id: 10, nama: 'Liam Pink', totalPembelian: 220 },
  ];

  const [selectedPeriod, setSelectedPeriod] = useState('hari');

  const getLeaderboardData = () => {
    switch (selectedPeriod) {
      case 'hari':
        return pembeliHarian;
      case 'minggu':
        return pembeliMingguan;
      case 'bulan':
        return pembeliBulanan;
      default:
        return pembeliHarian;
    }
  };

  return (
    <div className="py-10 px-6 bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-white text-center">
        Leaderboard Top 10 Pembeli Terbanyak
      </h1>

      <div className="flex space-x-4 mb-8">
        <button
          className={`px-6 py-3 rounded-full font-semibold transition ${
            selectedPeriod === 'hari' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gary-800 hover:bg-gray-400'
          }`}
          onClick={() => setSelectedPeriod('hari')}
        >
          Hari ini
        </button>
        <button
          className={`px-6 py-3 rounded-full font-semibold transition ${
            selectedPeriod === 'minggu' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-400'
          }`}
          onClick={() => setSelectedPeriod('minggu')}
        >
          Minggu ini
        </button>
        <button
          className={`px-6 py-3 rounded-full font-semibold transition ${
            selectedPeriod === 'bulan' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-400'
          }`}
          onClick={() => setSelectedPeriod('bulan')}
        >
          Bulan ini
        </button>
      </div>

      <div className="w-full max-w-4xl overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="py-3 px-6 text-center">#</th>
              <th className="py-3 px-6 text-center">Nama Pembeli</th>
              <th className="py-3 px-6 text-center">Total Pembelian</th>
            </tr>
          </thead>
          <tbody>
            {getLeaderboardData().map((pembeli, index) => (
              <tr key={pembeli.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                <td className="py-3 px-6 text-center">{index + 1}</td>
                <td className="py-3 px-6 text-center">{pembeli.nama}</td>
                <td className="py-3 px-6 text-center">{pembeli.totalPembelian}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
