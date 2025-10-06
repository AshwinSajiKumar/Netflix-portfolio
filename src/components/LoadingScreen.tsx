import React from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img 
          src="/images/Netflix.png" 
          alt="Loading..." 
          className="loading-logo"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
