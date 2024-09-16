// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameDetails from './pages/GameDetails';
import Navbar from './components/Navbar';
import CariTransaksi from './pages/CariTransaksi';
import Leaderboard from './pages/LeaderBoard';
import Footer from './components/Footer';
import { LoadingProvider, useLoading } from './components/LoadingContext'; // Import LoadingProvider
import LoadingPage from './components/LoadingPage'; // Import LoadingPage

function App() {
  return (
    <LoadingProvider> {/* Tambahkan LoadingProvider */}
      <div className="min-h-screen flex flex-col">
        <Navbar /> 
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="caritransaksi" element={<CariTransaksi />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="/game/:id" element={<GameDetails />} />
          </Routes>
        </main>
        <Footer />
        <LoadingWithContext /> {/* Tambahkan LoadingWithContext di sini */}
      </div>
    </LoadingProvider>
  );
}

// Komponen untuk menampilkan loading berdasarkan context
const LoadingWithContext = () => {
  const { isLoading } = useLoading(); // Ambil state loading dari context

  if (!isLoading) return null;

  return <LoadingPage />;
};

export default App;
