import React from 'react';
import kart1 from './kart-1.png';

const RoundedBoxWithImageAndText = ({ text }) => {
  return (
    <div style={{
      borderRadius: '10px',
      border: '1px solid #ccc',
      padding: '10px',
      height: '250px',
      width: '250px',
      transform: 'translate(0px, 250px)',
      backgroundImage: `url(${kart1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>{text}</p>
    </div>
  );
};

export default RoundedBoxWithImageAndText;



