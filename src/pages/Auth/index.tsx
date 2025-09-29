import React, { useState, useEffect } from 'react';
import './index.less';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName as setReduxName } from '@/store/user';
import register from '@/assets/images/register.png';
import shadow from '@/assets/images/shadow.png';
import Button from '@/components/Button';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedName = sessionStorage.getItem('salad_userName');
    if (savedName) {
      setName(savedName);
      dispatch(setReduxName(savedName));
    }
  }, [dispatch]);

  const handleStartOrdering = () => {
    const trimmedName = name.trim();
    if (trimmedName) {
      dispatch(setReduxName(trimmedName));
      sessionStorage.setItem('salad_userName', trimmedName);
      navigate('/home');
    } else {
      if (error) { // This is the second attempt
        const defaultName = 'Bean';
        dispatch(setReduxName(defaultName));
        sessionStorage.setItem('salad_userName', defaultName);
        navigate('/home');
      } else { // This is the first attempt
        setError('Name cannot be empty.');
      }
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
          placeholder="Bean"
          className="auth-input"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (error) {
              setError('');
            }
          }}
        />
        {error && <p className="error-message">{error}</p>}
        <Button onClick={handleStartOrdering} className="auth-button">
          Start Ordering
        </Button>
      </div>
    </div>
  );
};

export default Auth;
