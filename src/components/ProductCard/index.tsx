import React from 'react';
import './index.less';
import like from '@/assets/svg/like.svg';
import circleAdd from '@/assets/svg/circle-add.svg';
import add from '@/assets/svg/add.svg';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  variant?: 'large' | 'small';
  bgColor?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, variant = 'large', bgColor }) => {
  return (
    <div className={`product-card ${variant}`} style={{ backgroundColor: bgColor }}>
      <img src={like} alt="Like" className="like-icon" />
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <p className="product-name">{name}</p>
      <div className="product-price-add">
        <span className="product-price">₦ {price.toLocaleString()}</span>
        <div className="add-button-wrapper">
          <img src={circleAdd} alt="Add to cart" className="circle-add-icon" />
          <img src={add} alt="" className="add-icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
