import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = (): void => {
    navigate('/editor');
  };

  return (
    <div>
      <span>HOME PAGE</span>
      <button onClick={handleButtonClick}>Go to Editor</button>
    </div>
  );
};
