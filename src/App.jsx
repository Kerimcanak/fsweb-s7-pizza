import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import workintech from '/workintech.svg';
import './App.css';
import Header from './assets/homePage/header';
import homeBanner from './assets/homePage/home-banner.png';

function App() {
  const [count, setCount] = useState(0);
  const [headerValue, setHeaderValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const headers = response.headers;
        const headerValue = headers.get('X-Custom-Header');
        setHeaderValue(headerValue);
      } catch (error) {
        setHeaderValue('Error: ' + error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App" style={{
      backgroundImage: `url(${homeBanner})`,
      backgroundSize: '100% 100%', // Cover the entire container
      backgroundPosition: 'center top', // Center the background image
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Header></Header>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '6em 0',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '2em 0',
        }}>
          <h2>Kod acıktırır, pizza doyurur</h2>
        </div>
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            Absolute Acı Pizza sayısı {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
