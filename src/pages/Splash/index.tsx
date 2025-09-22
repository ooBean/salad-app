import React from 'react';
import logo from '@/assets/svg/logo.svg';
import './index.less';

const Splash: React.FC = () => {
  return (
    <div className="splash-page">
      <img src={logo} alt="Fruit Hub logo" />
    </div>
  );
};

export default Splash;
