import React, { useEffect } from 'react';
import logo from '@/assets/svg/logo.svg';
import './index.less';
import { useNavigate } from 'react-router-dom';

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 2000); // Navigate after 2 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-page">
      <img src={logo} alt="Fruit Hub logo" />
    </div>
  );
};

export default Splash;
