import React, { useState } from 'react';
import './index.less';
import { useNavigate } from 'react-router-dom';
import register from '@/assets/images/register.png';
import shadow from '@/assets/images/shadow.png';
import Button from '@/components/Button';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleStartOrdering = () => {
    if (name.trim()) {
      navigate('/home');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src={register} alt="Register" />
        <img src={shadow} alt="Shadow" />
      </div>
      <div className="auth-content">
        <h1>What is your firstname?</h1>
        <input
          type="text"
          placeholder="Chris"
          className="auth-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={handleStartOrdering} className="auth-button">
          Start Ordering
        </Button>
      </div>
    </div>
  );
};

export default Auth;
