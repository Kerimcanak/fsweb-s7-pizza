import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './assets/homePage/header';
import homeBanner from './assets/homePage/home-banner.png';

function App() {
  const [count, setCount] = useState(0);
  const documentElement = useRef(null);

  return (
    <div ref={documentElement}>
      <div style={{
        backgroundImage: `url(${homeBanner})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Header />
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 style={{marginTop: '180px'}}>
            KOD ACIKTIRIR
            <br/>
            PIZZA, DOYURUR
          </h2>
        </div>
        <div style={{marginTop: '20px'}}>
          <Button />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="yellow-button">
      <span className="button-text-large">ACIKTIM</span>
    </button>
  );
}

export default App;

