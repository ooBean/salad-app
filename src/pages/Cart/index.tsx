import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { incrementQuantity, decrementQuantity, clearCart } from '@/store/cart';
import { motion, AnimatePresence } from 'framer-motion'; // 引入 framer-motion
import arrow from '@/assets/svg/arrow.svg';
import minus from '@/assets/svg/minus.svg';
import circleAdd from '@/assets/svg/circle-add.svg';
import PaymentModal from '@/components/PaymentModal';
import beanCat from '@/assets/images/bean-cat.jpg';
import add from '@/assets/svg/add.svg';
import './index.less';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    // When the component unmounts, ensure the modal is closed
    return () => {
      setIsModalVisible(false);
    };
  }, []);

  const handleOrderComplete = () => {
    dispatch(clearCart());
  };

  const totalValue = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = totalValue.toLocaleString();

  return (
    <div className="cart-container">
      {/* 顶部橙色头部 */}
      <div className="cart-header">
        <div className="go-back" onClick={() => navigate(-1)}>
          <img src={arrow} alt="arrow" />
          <span>Go back</span>
        </div>
        <h1 className="basket-title">My Basket</h1>
      </div>

      {/* 白色内容区域，包含列表和底部 */}
      <div className="cart-body">
        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <img src={beanCat} alt="Empty cart" style={{ display: 'block', width: '160px', margin: '0 auto 16px' }} />
            <p className="empty-cart-message" style={{ fontSize: '24px' }}>Your cart is empty.</p>
          </div>
        ) : (
          <div className="cart-items">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="cart-item"
                  layout // 自动处理重排序动画
                  initial={{ opacity: 0, x: -50 }} // 初始状态
                  animate={{ opacity: 1, x: 0 }} // 动画到最终状态
                  exit={{ opacity: 0, x: 50, scale: 0.8 }} // 离开时的动画
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }} // 动画效果
                >
                  <div className="thumb" style={{ backgroundColor: item.bgColor }}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="item-info">
                    <div className="item-name">{item.title}</div>
                    <div className="item-sub">{item.quantity} packs</div>
                    <div className="item-price">₦{item.price.toLocaleString()}</div>
                  </div>
                  <div className="item-actions">
                    <div className="quantity-control">
                        <div className="action-button" onClick={() => dispatch(decrementQuantity(item.id))}>
                            <img src={circleAdd} alt="circle" className='circle-bg' />
                            <img src={minus} alt="minus" className='minus-icon' />
                        </div>
                        <div className="action-button" onClick={() => dispatch(incrementQuantity(item.id))}>
                            <img src={circleAdd} alt="circle" className='circle-bg' />
                            <img src={add} alt="add" className='add-icon' />
                        </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        <div className="cart-footer">
          <div className="total-label">
            {cartItems.length > 0 && (
              <>
                Total
                <span className="total-amount"> ₦{total}</span>
              </>
            )}
          </div>
          <button
            className="checkout-btn"
            onClick={cartItems.length > 0 ? () => setIsModalVisible(true) : () => navigate('/home')}
          >
            {cartItems.length > 0 ? 'Checkout' : 'Go Shopping'}
          </button>
        </div>
      </div>
      <PaymentModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
};

export default Cart;
