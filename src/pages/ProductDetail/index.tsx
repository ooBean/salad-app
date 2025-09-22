import React from 'react';
import melonFruitSalad from '@/assets/images/salad/melon-fruit-salad.png';
import Button from '@/components/Button';
import like from '@/assets/svg/like.svg';
import circleAdd from '@/assets/svg/circle-add.svg';
import add from '@/assets/svg/add.svg';

import './index.less';

const ProductDetail: React.FC = () => {
  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <button className="go-back-button">
          &lt; Go back
        </button>
        <img src={melonFruitSalad} alt="Quinoa Fruit Salad" />
      </div>

      <div className="product-info-container">
        <h1 className="product-name">Quinoa Fruit Salad</h1>
        <div className="quantity-selector">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div className="price">₦ 2,000</div>
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
