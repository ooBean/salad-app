import React from 'react';
import arrow from '@/assets/svg/arrow.svg';
import './index.less';

interface ScrollArrowProps {
  visible: boolean;
  onClick: () => void;
  direction: 'left' | 'right';
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ visible, onClick, direction }) => {
  if (!visible) return null;

  return (
    <div className={`scroll-arrow ${direction}`} onClick={onClick}>
      <img src={arrow} alt={`Scroll ${direction}`} />
    </div>
  );
};

export default ScrollArrow;
