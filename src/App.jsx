import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './assets/homePage/header';
import homeBanner from './assets/homePage/home-banner.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      <button className="yellow-button">
        <span className="button-text-large">ACIKTIM</span>
      </button>
      </div>
    </div>
  );
}

<Router>
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
</Router>

export default App;


