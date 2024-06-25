import React from 'react';
import { Link } from 'react-router-dom';
import kart2 from './kart-2.png';
import kart3 from './kart-3.png';

const RoundedBoxesWithImageAndText = ({ textOne, textTwo }) => {
  const imageUrl = 'https://picsum.photos/200';

  return (
    <div >
      <Link to="/order-pizza/complete/burger" style={{ textDecoration: 'none' }}>
        <div style={{
          borderRadius: '10px',
          border: '1px solid #ccc',
          height: '200px',
          width: '500px',
          backgroundImage: `url(${kart2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.5)'
        }}>
          <div style={{ color: 'white', fontSize: '2em', textShadow: '0px 0px 2px rgba(0,0,0,0.5)' }}>
            <div style={{ textAlign: 'center' }}>
              Acılı burger seçeneği!
            </div>
          </div>
        </div>
      </Link>
      <div style={{
        borderRadius: '10px',
        border: '1px solid #ccc',
        height: '200px',
        width: '500px',
        marginTop: '20px',
        backgroundImage: `url(${kart3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)'
      }}>
        <div style={{ color: 'white', fontSize: '2em', textShadow: '0px 0px 2px rgba(0,0,0,0.5)' }}>
          <div style={{ textAlign: 'center' }}>
            Hızlı teslimat!
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundedBoxesWithImageAndText;


