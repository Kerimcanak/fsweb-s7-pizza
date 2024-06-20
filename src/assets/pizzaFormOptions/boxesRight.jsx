import React from 'react';
import { Link } from 'react-router-dom';
import kart2 from './kart-2.png';
import kart3 from './kart-3.png';

const RoundedBoxesWithImageAndText = ({ textOne, textTwo }) => {
  const imageUrl = 'https://picsum.photos/200';

  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      transform: 'translate(300px, -270px)' }}>
      <Link to="/order-pizza/complete/burger" style={{ textDecoration: 'none' }}>
        <div style={{
          borderRadius: '10px',
          border: '1px solid #ccc',
          padding: '10px',
          height: '200px',
          width: '500px',
          backgroundImage: `url(${kart2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.5)'
        }}>
          <div style={{ position: 'absolute', top: '27%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '2em', textShadow: '0px 0px 2px rgba(0,0,0,0.5)' }}>
            <div style={{ textAlign: 'center' }}>
              Acılı burger seçeneği!
            </div>
          </div>
        </div>
      </Link>
      <div style={{
        borderRadius: '10px',
        border: '1px solid #ccc',
        padding: '10px',
        height: '200px',
        width: '500px',
        marginTop: '20px',
        backgroundImage: `url(${kart3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)'
      }}>
        <div style={{ position: 'absolute', top: '74%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '2em', textShadow: '0px 0px 2px rgba(0,0,0,0.5)' }}>
          <div style={{ textAlign: 'center' }}>
            Hızlı teslimat!
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundedBoxesWithImageAndText;

