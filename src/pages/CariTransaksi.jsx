import React, { useState } from 'react';

const CariTransaksi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // Dummy data transaksi untuk pencarian
  const transaksiData = [
    { id: 1, nomor: 'INV001', tanggal: '2023-09-10', status: 'Selesai' },
    { id: 2, nomor: 'INV002', tanggal: '2023-09-12', status: 'Pending' },
    { id: 3, nomor: 'INV003', tanggal: '2023-09-15', status: 'Dibatalkan' },
    // Tambahkan lebih banyak data jika diperlukan
  ];

  // Dummy data transaksi real-time untuk tabel
  const transaksiRealtime = [
    {
      id: 1,
      tanggal: '2023-09-18',
      invoice: 'INV00456789',
      nomorHp: '08123456789',
      harga: 'Rp 150.000',
      status: 'Selesai',
    },
    {
      id: 2,
      tanggal: '2023-09-19',
      invoice: 'INV00598765',
      nomorHp: '08198765432',
      harga: 'Rp 200.000',
      status: 'Pending',
    },
    {
      id: 3,
      tanggal: '2023-09-20',
      invoice: 'INV00612345',
      nomorHp: '08134567890',
      harga: 'Rp 100.000',
      status: 'Dibatalkan',
    },
    // Tambahkan lebih banyak data jika diperlukan
  ];

  // Fungsi untuk mencari transaksi
  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = transaksiData.filter((transaksi) =>
      transaksi.nomor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
  };

  // Fungsi untuk menyembunyikan sebagian nomor invoice
  const hideInvoiceNumber = (invoice) => {
    const visibleDigits = invoice.slice(-4);
    return `****${visibleDigits}`;
  };

  // Fungsi untuk menyembunyikan sebagian nomor handphone
  const hidePhoneNumber = (nomorHp) => {
    const visibleDigits = nomorHp.slice(-4);
    return `**** **** ${visibleDigits}`;
  };

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6 text-white">Cari Transaksi</h1>

      {/* Form Pencarian */}
      <form onSubmit={handleSearch} className="mb-8 w-full max-w-lg">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Masukkan nomor transaksi"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all"
        >
          Cari Transaksi
        </button>
      </form>

      {/* Hasil Pencarian */}
      {results.length > 0 ? (
        <div className="w-full max-w-lg mb-10">
          <h2 className="text-lg font-semibold mb-4 text-white">Hasil Pencarian:</h2>
          <ul className="space-y-4">
            {results.map((transaksi) => (
              <li
                key={transaksi.id}
                className="p-4 border border-gray-300 rounded-lg shadow-sm flex justify-between bg-white"
              >
                <div>
                  <p className="font-semibold">Nomor: {transaksi.nomor}</p>
                  <p className="text-gray-600">Tanggal: {transaksi.tanggal}</p>
                </div>
                <span
                  className={`${
                    transaksi.status === 'Selesai'
                      ? 'text-green-500'
                      : transaksi.status === 'Pending'
                      ? 'text-yellow-500'
                      : 'text-red-500'
                  } font-semibold`}
                >
                  {transaksi.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-300 mt-4 ">Tidak ada transaksi yang ditemukan.</p>
      )}

      {/* Tabel Transaksi Real-Time */}
      <div className="w-full max-w-5xl">
        <h2 className="text-xl font-semibold mb-4 text-white">Transaksi Real-Time</h2>
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white shadow-md ">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Tanggal</th>
                <th className="px-4 py-2">Nomor Invoice</th>
                <th className="px-4 py-2">Nomor Handphone</th>
                <th className="px-4 py-2">Harga</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transaksiRealtime.map((transaksi) => (
                <tr key={transaksi.id} className="border-b">
                  <td className="px-4 py-2 text-center">{transaksi.tanggal}</td>
                  <td className="px-4 py-2 text-center">
                    {hideInvoiceNumber(transaksi.invoice)}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {hidePhoneNumber(transaksi.nomorHp)}
                  </td>
                  <td className="px-4 py-2 text-center">{transaksi.harga}</td>
                  <td
                    className={`px-4 py-2 text-center font-semibold ${
                      transaksi.status === 'Selesai'
                        ? 'text-green-500'
                        : transaksi.status === 'Pending'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}
                  >
                    {transaksi.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CariTransaksi;
