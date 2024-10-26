// SplashScreen.tsx
import React, { useEffect } from 'react';
import './styles.css'; // Import the CSS file with styles and animations

interface NetflixIntroProps {
  letter: 'N' | 'E' | 'T' | 'F' | 'L' | 'I' | 'X';
}

const SplashScreen: React.FC<NetflixIntroProps> = ({ letter }) => {
  useEffect(() => {
    // Assign random delays to lamp elements
    const lamps = document.querySelectorAll('.lamp');
    lamps.forEach((lamp) => {
      const delay = Math.random() * 2; // Random delay between 0 and 2 seconds
      (lamp as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, []);

  // Helper method to render fur elements
  const renderFurElements = () => {
    return Array.from({ length: 31 }, (_, index) => (
      <span key={index} className={`fur fur-${31 - index}`}></span>
    ));
  };

  // Helper method to render lamp elements
  const renderLampElements = () => {
    return Array.from({ length: 28 }, (_, index) => (
      <span key={index} className={`lamp lamp-${index + 1}`}></span>
    ));
  };

  // Render helper elements based on the letter
  const renderHelperElements = () => {
    switch (letter) {
      case 'N':
        return (
          <>
            <div className="helper helper-1">
              <div className="effect-brush">
                {renderFurElements()}
              </div>
              <div className="effect-lumieres">
                {renderLampElements()}
              </div>
            </div>
            <div className="helper helper-2">
              <div className="effect-brush">
                {renderFurElements()}
              </div>
            </div>
            <div className="helper helper-3">
              <div className="effect-brush">
                {renderFurElements()}
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="splash-screen">
      <div id="container">
        <div className="netflixintro" data-letter={letter}>
          {renderHelperElements()}
        </div>

          
        {/* Rainbow explosion animation */}
        <div className="rainbow-explosion">
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index} className="particle"></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
