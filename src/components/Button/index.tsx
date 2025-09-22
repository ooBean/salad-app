import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, ...rest }) => {
  return (
    <button onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
