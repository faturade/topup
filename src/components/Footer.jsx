import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 relative">
      <div className="container mx-auto">
        <h3 className="text-center mb-9 text-sm">
          No #1 supplier top up game & voucher terlaris, murah, aman legal 100% buka 24 Jam dengan payment terlengkap Indonesia
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-orange-500">Kemitraan</h3>
            <ul className="space-y-2">
              <li><a href="#affiliates" className="hover:text-orange-400">Afiliasi</a></li>
              <li><a href="#resellers" className="hover:text-orange-400">Reseller</a></li>
              <li><a href="#web-topup" className="hover:text-orange-400">Web Topup</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-orange-500">Peta Situs</h3>
            <ul className="space-y-2">
              <li><a href="#beranda" className="hover:text-orange-400">Beranda</a></li>
              <li><a href="#caritransaksi" className="hover:text-orange-400">Cari Transaksi</a></li>
              <li><a href="#hubungikami" className="hover:text-orange-400">Hubungi Kami</a></li>
              <li><a href="#masuk" className="hover:text-orange-400">Masuk</a></li>
              <li><a href="#daftar" className="hover:text-orange-400">Daftar</a></li>
              <li><a href="#ulasa" className="hover:text-orange-400">Ulasan</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-orange-500">Dukungan</h3>
            <ul className="space-y-2">
              <li><a href="#whatsapp" className="hover:text-orange-400">WhatsApp</a></li>
              <li><a href="#telegram" className="hover:text-orange-400">Telegram</a></li>
              <li><a href="#line" className="hover:text-orange-400">Line</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-orange-500">Legalitas</h3>
            <ul className="space-y-2">
              <li><a href="#kebijakanpribadi" className="hover:text-orange-400">Kebijakan Pribadi</a></li>
              <li><a href="#syaratdanketentuan" className="hover:text-orange-400">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-orange-500">Media Sosial</h3>
            <ul className="space-y-2 flex flex-col items-start">
              <li className="flex items-center"><FontAwesomeIcon icon={faFacebookF} size="lg" className="mr-2" /><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">Facebook</a></li>
              <li className="flex items-center"><FontAwesomeIcon icon={faTwitter} size="lg" className="mr-2" /><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">Twitter</a></li>
              <li className="flex items-center"><FontAwesomeIcon icon={faInstagram} size="lg" className="mr-2" /><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">Instagram</a></li>
              <li className="flex items-center"><FontAwesomeIcon icon={faLinkedinIn} size="lg" className="mr-2" /><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        
        <div className="border-t border-gray-100 ">
          <p className="text-sm text-center py-4">&copy; 2024 Ade Faturahman. All rights reserved.</p>
          <div className="flex items-end justify-end mb-16">
            <a href="#top" className="flex bg-gray-900 hover:bg-gray-700 text-white justify-center text-xl h-[40px] w-[40px] items-center rounded-xl border-2 border-orange-500" aria-label="Back to top">
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
