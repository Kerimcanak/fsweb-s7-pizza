import React from 'react';

const RoundedBoxesWithImageAndText = ({ textOne, textTwo }) => {
  const imageUrl = 'https://picsum.photos/200';

  return (
    <div style={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      transform: 'translate(200px, 10px)' }}>
      <div style={{
        borderRadius: '10px',
        border: '1px solid #ccc',
        padding: '10px',
        width: '200px',
      }}>
        <img src={imageUrl} alt="Image" style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
        <p style={{ textAlign: 'center', marginTop: '10px' }}>{textOne}</p>
      </div>
      <div style={{
        borderRadius: '10px',
        border: '1px solid #ccc',
        padding: '10px',
        width: '200px',
        marginTop: '20px',
      }}>
        <img src={imageUrl} alt="Image" style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
        <p style={{ textAlign: 'center', marginTop: '10px' }}>{textTwo}</p>
      </div>
    </div>
  );
};

export default RoundedBoxesWithImageAndText;


