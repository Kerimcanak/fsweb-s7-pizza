import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './assets/homePage/header';
import homeBanner from './assets/homePage/home-banner.png';
import Navbar from './assets/iterasyon2/NavBar';
import Footer from './assets/iterasyon2/Footer';
import Copyright from './assets/iterasyon2/Copyright';
import kart1 from './assets/iterasyon2/kart-1.png';
import kart2 from './assets/iterasyon2/kart-2.png';
import kart3 from './assets/iterasyon2/kart-3.png';

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
      <Navbar />
      <div style={{ height: '600px', backgroundColor: '#faf7f2' }} >

        {/* kartlar */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <img src={kart1} alt="kart" style={{ height: '400px', borderRadius: '20px', marginTop: '50px', marginLeft: '270px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={kart2} alt="kart" style={{ height: '200px', borderRadius: '20px', marginTop: '50px', marginLeft: '10px' }} />
      <img src={kart3} alt="kart" style={{ height: '200px', borderRadius: '20px', marginTop: '10px', marginLeft: '10px' }} />
      </div>
      </div>

      {/* yemekler */}
      
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default MainPage;

