import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './assets/homePage/header';
import homeBanner from './assets/homePage/home-banner.png';

function MainPage() {
  const [count, setCount] = useState(0);
  const animationRef = useRef(null); // Reference to the animation element

  const handleClick = () => {
    // Play the animation
    document.body.classList.add('animate-out'); // Add the animation class to the body element
  
    // After the animation is complete, navigate to the order-pizza page
    setTimeout(() => {
      window.location.href = '/order-pizza/main'; // Use window.location.href to navigate
    }, 1000); // Adjust the animation duration as needed
  };

  useEffect(() => {
    // Add a click event listener to the animation element
    animationRef.current.addEventListener('animationend', () => {});
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${homeBanner})`,
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Header />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ marginTop: '180px' }}>
            KOD ACIKTIRIR
            <br />
            PIZZA, DOYURUR
          </h2>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button className="yellow-button" onClick={handleClick} ref={animationRef}>
            <span className="button-text-large">ACIKTIM</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

