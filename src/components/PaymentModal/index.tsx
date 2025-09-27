import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.less';

type PaymentModalProps = {
  visible: boolean;
  onClose: () => void;
};

const PaymentModal: React.FC<PaymentModalProps> = ({ visible, onClose }) => {
  const navigate = useNavigate();
  const [view, setView] = useState<'card' | 'delivery'>('card');

  if (!visible) {
    return null;
  }

  const handleClose = () => {
    onClose();
    setView('card'); // Reset view when closing
  };

  const handleOrder = () => {
    handleClose();
    navigate('/order-complete');
  };

  return (
    <div className="payment-modal-overlay" onClick={handleClose}>
      <div className="payment-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="close-btn" onClick={handleClose}></div>

        {view === 'card' ? (
          <div className="form-content">
            <div className="form-group">
              <label htmlFor="card-holder">Card holder's name</label>
              <input id="card-holder" type="text" placeholder="10th avenue, Lekki, Lagos." />
            </div>
            <div className="form-group">
              <label htmlFor="card-number">Card number</label>
              <input id="card-number" type="text" placeholder="09090909090" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiry-date">Date</label>
                <input id="expiry-date" type="text" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label htmlFor="ccv">CVV</label>
                <input id="ccv" type="text" placeholder="MM/YY" />
              </div>
            </div>
            <button className="complete-order-btn" onClick={() => setView('delivery')}>
              Complete order
            </button>
          </div>
        ) : (
          <div className="form-content">
            <h2 className="modal-title">Delivery details</h2>
            <div className="form-group">
              <label htmlFor="delivery-address">Your delivery address</label>
              <input id="delivery-address" type="text" placeholder="10th avenue, Lekki, Lagos." />
            </div>
            <div className="form-group">
              <label htmlFor="phone-number">Number we can call</label>
              <input id="phone-number" type="text" placeholder="09090909090" />
            </div>
            <div className="footer-buttons">
              <button className="footer-btn pay-on-delivery" onClick={handleOrder}>Pay on delivery</button>
              <button className="footer-btn pay-with-card" onClick={handleOrder}>Pay with card</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
