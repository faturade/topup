import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import bgimg from '../assets/image/pass.webp';

const ModalInfo = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <button
          className="absolute top-4 right-4 text-white bg-black border-2 border-orange-500 py-1 px-2 rounded-lg hover:bg-gray-800 transition duration-300"
          onClick={() => setShowModal(false)}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default ModalInfo;
