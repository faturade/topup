import React, { useState, useEffect } from 'react';
import ModalInfo from '../components/ModalInfo.jsx'; 
import RedeemDiscount from '../components/RedeemDiscount.jsx';
import Slide from '../components/Slide.jsx';
import Products from '../components/Products.jsx';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="p-6">
      <ModalInfo showModal={showModal} setShowModal={setShowModal} />
      <div>
        <Slide />  
      </div>
      <div className='py-2'>
        <RedeemDiscount />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};
export default Home;