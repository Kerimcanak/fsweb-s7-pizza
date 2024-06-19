import React from 'react';

const Navbar = () => {
  const listStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    transform: 'translate(0px, 170px)', // Move the list 20px to the right and 20px down
  };

  return (
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <ul style={listStyle}>
        <li style={{ margin: '0 10px' }}>YENİ! Kore</li>
        <li style={{ margin: '0 10px' }}>Pizza</li>
        <li style={{ margin: '0 10px' }}>Burger</li>
        <li style={{ margin: '0 10px' }}>Kızartma</li>
        <li style={{ margin: '0 10px' }}>Fast food</li>
        <li style={{ margin: '0 10px' }}>Gazlı içecek</li>
      </ul>
    </div>
  );
};

export default Navbar;
