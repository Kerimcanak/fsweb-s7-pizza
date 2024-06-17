import React from 'react';

const Header = ({ headerValue }) => (
  <header style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1em 2rem',
    backgroundColor: 'red',
    color: 'white',
    margin: 0
  }}>
    <h1 style={{ margin: 0, padding: 0 }}>Header Value: {headerValue}</h1>
  </header>
);

export default Header;
