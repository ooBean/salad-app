import React from 'react';
import { useNavigate } from 'react-router-dom';
import melonFruitSalad from '@/assets/images/salad/melon-fruit-salad.png';
import Button from '@/components/Button';
import like from '@/assets/svg/like.svg';
import circleAdd from '@/assets/svg/circle-add.svg';
import minus from '@/assets/svg/minus.svg';
import add from '@/assets/svg/add.svg';
import arrow from '@/assets/svg/arrow.svg';

import './index.less';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <div className='go-back' onClick={() => navigate('/home')}>
          <img src={arrow} alt="arrow" />
          <span>Go back</span>
        </div>
        <img src={melonFruitSalad} alt="Quinoa Fruit Salad" />
      </div>

      <div className="product-info-container">
        <h1 className="product-name">Quinoa Fruit Salad</h1>
        <div className='product-info'>
          <div className="quantity-selector">
            <div className='add'>
              <img className="circle-icon" src={circleAdd} alt="circle add" />
              <img className="inner-icon" src={add} alt="add" />
            </div>
            <span className="qty-number">1</span>
            <div className='minus'>
              <img className="circle-icon" src={circleAdd} alt="circle add" />
              <img className="inner-icon" src={minus} alt="minus" />
            </div>
          </div>
          <div className="price">₦ 2,000</div>

        </div>



        <div className="combo-contains">This combo contains:</div>
        <div className="ingredients">
          <span>Red Quinoa</span>
          <span>Lime</span>
          <span>Honey</span>
          <span>Blueberries</span>
          <span>Mango</span>
          <span>Strawberries</span>
          <span>Fresh Mint</span>
        </div>
        <div className="description">
          If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make
        </div>
        <div className="action-buttons">
          <button className="like-button">
            <img src={like} alt="like" />
          </button>
          <Button className="add-to-basket">
            Add To Basket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
