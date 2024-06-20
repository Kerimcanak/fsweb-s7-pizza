import React from 'react';
import kart2 from './kart-2.png';
import kart3 from './kart-3.png';

const RoundedBoxesWithImageAndText = ({ textOne, textTwo }) => {
  const imageUrl = 'https://picsum.photos/200';

  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      transform: 'translate(300px, -270px)' }}>
      <div style={{
        borderRadius: '10px',
        border: '1px solid #ccc',
        padding: '10px',
        height: '200px',
        width: '500px',
        backgroundImage: `url(${kart2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>{textOne}</p>
      </div>
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
        backgroundRepeat: 'no-repeat'
      }}>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>{textTwo}</p>
      </div>
    </div>
  );
};

export default RoundedBoxesWithImageAndText;


