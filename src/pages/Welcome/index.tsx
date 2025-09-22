import React from 'react';
import { useNavigate } from 'react-router-dom';
import introduce from '@/assets/images/introduce.png';
import shadow from '@/assets/images/shadow.png';
import Button from '@/components/Button';
import './index.less';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/auth');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-image">
        <img src={introduce} alt="Welcome" />
        <img src={shadow} alt="Shadow" />
      </div>
      <div className="welcome-content">
        <p className='title'>Get The Freshest Fruit Salad Combo</p>
        <p className='description'>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</p>
        <Button onClick={handleContinue} className="welcome-button">
          Let's Continue
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
