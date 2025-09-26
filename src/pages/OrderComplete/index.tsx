import React from 'react';
import { useNavigate } from 'react-router-dom';
import tickImage from '@/assets/images/tick.png';

import './index.less';

const OrderComplete: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="order-complete-container">
      <img src={tickImage} alt="Order Complete" className="tick-image" />
      <h1 className="title">Congratulations!!!</h1>
      <p className="subtitle">
        Your order have been taken and is being attended to
      </p>
      <button className="track-order-btn" onClick={() => navigate('/delivery-status')}>Track order</button>
      <button
        className="continue-shopping-btn"
        onClick={() => navigate('/home')}
      >
        Continue shopping
      </button>
    </div>
  );
};

export default OrderComplete;
