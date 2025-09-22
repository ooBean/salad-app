import React from 'react';

interface CartItemProps {
  image: string;
  title: string;
  quantity: number;
  price: number;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ image, title, quantity, price, onRemove }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>Quantity: {quantity}</p>
        <p>Price: ₦{price.toLocaleString()}</p>
      </div>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
