import React, { useState, useEffect } from 'react';
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
        const headerValueFromResponse = headers.get('X-Custom-Header');
        setHeaderValue(headerValueFromResponse);
      } catch (error) {
        setHeaderValue('Error: ' + error.message);
      }
    };

    fetchData();
  }, []);

  return (
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
      justifyContent: 'center',
    }}>
      <Header style={{ position: 'absolute', top: '0em', left: 0, right: 0 }} />
        <div className="card" style={{marginTop: '0vh'}}>
            <h2 style={{ 
              marginBottom: '0px', 
              marginTop: '0vh', 
              color: 'white', 
              fontFamily: 'Arial Narrow, sans-serif', 
              fontWeight: '100', 
              fontSize: '47px' 
            }}>
              Kod acıktırır, pizza doyurur
            </h2>       </div>
        <div className="card" style={{marginTop: '10vh'}}>
          <button onClick={() => setCount(count + 1)} style={{backgroundColor: 'yellow'}}>
            Absolute Acı Pizza sayısı {count}
          </button>
        </div>
    </div>
  );
}

export default App;


