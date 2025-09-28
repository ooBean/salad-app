import React, { useRef } from 'react';
import './index.less';
import like from '@/assets/svg/like.svg';
import circleAdd from '@/assets/svg/circle-add.svg';
import add from '@/assets/svg/add.svg';
import { Product } from '@/store/product';

interface ProductCardProps {
  product: Product;
  variant?: 'large' | 'small';
  onAddToCart: (element: HTMLDivElement, product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'large', onAddToCart }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { image, name, price, bgColor } = product;

  const handleAddToCartClick = () => {
    if (imageContainerRef.current) {
      onAddToCart(imageContainerRef.current, product);
    }
  };

  return (
    <div 
      className={`product-card ${variant}`}
      style={{ backgroundColor: variant === 'small' ? bgColor : undefined }}
    >
      <img src={like} alt="Like" className="like-icon" />
      <div className="product-image-container" ref={imageContainerRef}>
        <img src={image} alt={name} className="product-image" />
      </div>
      <p className="product-name">{name}</p>
      <div className="product-price-add">
        <span className="product-price">₦ {price.toLocaleString()}</span>
        <div className="add-button-wrapper" onClick={handleAddToCartClick}>
          <img src={circleAdd} alt="Add to cart" className="circle-add-icon" />
          <img src={add} alt="" className="add-icon" />
        </div>
      </div>
    </div>
  );
};export default ProductCard;
