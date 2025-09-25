import React from 'react';
import arrow from '@/assets/svg/arrow.svg';
import melonFruitSalad from '@/assets/images/salad/melon-fruit-salad.png';
import minus from '@/assets/svg/minus.svg';
import circleAdd from '@/assets/svg/circle-add.svg';

import './index.less';

type CartItem = {
  id: number;
  name: string;
  packs: number;
  price: number;
  image?: string;
  bgColor?: string; // 1. 添加背景色属性
};

const Cart: React.FC = () => {
  // 示例数据：可替换为实际购物车数据
  const items: CartItem[] = [
    // 2. 根据图片为每个商品添加背景色
    { id: 1, name: 'Quinoa fruit salad', packs: 2, price: 20000, image: melonFruitSalad, bgColor: '#FFF9E5' },
    { id: 2, name: 'Melon fruit salad', packs: 2, price: 20000, image: melonFruitSalad, bgColor: '#F6F4FF' },
    { id: 3, name: 'Tropical fruit salad', packs: 2, price: 20000, image: melonFruitSalad, bgColor: '#FFF0F3' },
  ];

  const totalValue = items.reduce((sum, it) => sum + it.price * it.packs, 0);
  const total = totalValue.toLocaleString();

  return (
    <div className="cart-container">
      {/* 顶部橙色头部 */}
      <div className="cart-header">
        <div className="go-back">
          <img src={arrow} alt="arrow" />
          <span>Go back</span>
        </div>
        <h1 className="basket-title">My Basket</h1>
      </div>

      {/* 白色内容区域，包含列表和底部 */}
      <div className="cart-body">
        <div className="cart-items">
          {items.map((it) => (
            <div className="cart-item" key={it.id}>
              {/* 3. 使用内联样式动态设置背景色 */}
              <div className="thumb" style={{ backgroundColor: it.bgColor }}>
                <img src={it.image || melonFruitSalad} alt={it.name} />
              </div>
              <div className="item-info">
                <div className="item-name">{it.name}</div>
                <div className="item-sub">{it.packs} packs</div>
                <div className="item-price">₦{it.price.toLocaleString()}</div>
              </div>
              <div className="item-actions">
                <img src={circleAdd} alt="circle" className='circle-bg' />
                <img src={minus} alt="minus" className='minus-icon' />
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="total-label">
            Total
            <span className="total-amount"> ₦{total}</span>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
