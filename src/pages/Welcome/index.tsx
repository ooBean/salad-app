import React from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeSvg from '@/assets/svg/welcome.svg';
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
        <img src={WelcomeSvg} alt="Welcome" />
      </div>
      <div className="welcome-content">
        <h1>Get The Freshest Fruit Salad Combo</h1>
        <p>We deliver the best and freshest fruit salad in town. Order for a combo today!!</p>
        <Button onClick={handleContinue} className="welcome-button">
          Let's Continue
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
