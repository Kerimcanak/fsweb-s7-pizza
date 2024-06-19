import React from 'react';

const RoundedBoxWithImageAndText = ({ text }) => {
  const imageUrl = 'https://picsum.photos/200';

  return (
    <div style={{
      borderRadius: '10px',
      border: '1px solid #ccc',
      padding: '10px',
      width: '200px',
      transform: 'translate(0px, 250px)'
    }}>
      <img src={imageUrl} alt="Image" style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
      <p style={{ textAlign: 'center', marginTop: '10px' }}>{text}</p>
    </div>
  );
};

export default RoundedBoxWithImageAndText;

