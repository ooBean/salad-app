import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '@/assets/svg/arrow.svg';
import order from '@/assets/images/order.png';
import frame from '@/assets/images/frame.png';
import driver from '@/assets/images/driver.png';
import map from '@/assets/images/map.png';
import phone from '@/assets/images/phone.png';
import down from '@/assets/svg/down.svg';
// src\assets\svg\dots.svg
import dots from '@/assets/svg/dots.svg';

import line from '@/assets/svg/line.svg';

import './index.less';

const DeliveryStatus: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="delivery-status-container">
      <div className="header">
        <div className="go-back" onClick={() => navigate(-1)}>
          <img src={arrow} alt="Go back" />
          <span>Go back</span>
        </div>
        <h1 className="title">Delivery Status</h1>
      </div>
      <div className="status-body">
        <div className="status-item completed">
          <img src={order} alt="Order taken" className="icon" />
          <p>Order taken</p>
          <img src={down} alt="Completed" className="tick" />
        </div>
        <img src={line} alt="line" className="line-connector" />
        <div className="status-item completed">
          <img src={frame} alt="Order is being processed" className="icon" />
          <p>Order is being processed</p>
          <img src={down} alt="Completed" className="tick" />
        </div>
        <img src={line} alt="line" className="line-connector" />
        <div className="status-item in-progress">
          <img src={driver} alt="Order is being delivered" className="icon" />
          <div>
            <p>Order is being delivered</p>
            <span>Your meal is on it's way!</span>
          </div>
          <img src={phone} alt="Contact" className="contact" />
        </div>
        <img src={line} alt="line" className="line-connector" />
        <div className="map-image-container">
          <img src={map} alt="Map" className="map-image" />
        </div>
        <img src={line} alt="line" className="line-connector" />
        <div className="status-item future">
          <div className='success-icon'>

          <img src={down} alt="Order Received" className="icon" />
          </div>
          <p>Order Received</p>
          <img src={dots} alt="Pending" className="dots-icon" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatus;
