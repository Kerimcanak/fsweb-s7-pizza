import React from 'react';
import { Link } from 'react-router-dom';
import kart1 from './kart-1.png';

const RoundedBoxWithImageAndText = () => {
  return (
    <Link to="/order-pizza/complete/pizza" style={{
      textDecoration: 'none'
    }}>
      <div style={{
        borderRadius: '10px',
        border: '1px solid #ccc',
        padding: '10px',
        height: '450px',
        width: '350px',
        backgroundImage: `url(${kart1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)'
      }}>
        <div style={{ color: 'white', fontSize: '2em' }}>
          <div style={{ textAlign: 'center' }}>
            Sıcak pizza!
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoundedBoxWithImageAndText;
