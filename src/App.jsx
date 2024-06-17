import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import workintech from '/workintech.svg';
import './App.css';
import Header from './assets/homePage/header';

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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <Header>{headerValue}</Header>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <a href="https://github.com/Workintech/fsweb-s7-challenge-pizza"
          target="_blank">
          <img src={workintech} className="logo" alt="Workintech logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Workintech + 🍕</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Absolute Acı Pizza sayısı {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Workintech or Pizza logos to learn more
      </p>
    </div>
  );
}

export default App;

