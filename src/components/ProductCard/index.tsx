import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, onAddToCart }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>₦{price.toLocaleString()}</p>
      <button onClick={onAddToCart}>Add</button>
    </div>
  );
};

export default ProductCard;
