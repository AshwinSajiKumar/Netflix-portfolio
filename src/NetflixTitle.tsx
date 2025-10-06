import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';

// Using absolute path from public directory
const logoImage = '/images/Netflix.png';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = logoImage;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => console.error('Failed to load logo image');
  }, []);

  useEffect(() => {
    if (!imageLoaded) return;
    
    // Auto-trigger the animation and sound after a short delay
    const timer = setTimeout(() => {
      try {
        const audio = new Audio(netflixSound);
        audio.play().catch(error => console.error("Audio play error:", error));
      } catch (error) {
        console.error("Audio initialization error:", error);
      }
      
      setIsClicked(true);
      
      // Navigate to browse page after animation completes
      const navTimer = setTimeout(() => {
        navigate('/browse');
      }, 3000);
      
      return () => clearTimeout(navTimer);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [navigate, imageLoaded]);

  if (!imageLoaded) {
    return (
      <div className="netflix-container">
        <img 
          src={logoImage} 
          alt="Netflix Logo" 
          className={`netflix-logo`}
          onError={(e) => {
            console.error('Failed to load image:', logoImage);
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div style={{ color: 'white' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div className="netflix-container">
      <img 
        src={logoImage} 
        alt="Netflix Logo" 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
        onError={(e) => {
          console.error('Failed to load image:', logoImage);
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
    </div>
  );
};

export default NetflixTitle;
