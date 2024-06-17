import React from 'react';
import logo from './logo.svg';

/**
 * Renders a header component with a logo.
 *
 * @return {JSX.Element} The header component.
 */
const Header = () => (
  <header style={{
    position: 'absolute',
    top: '5em',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    padding: '0em',
    backgroundColor: 'c20608',
    margin: 0
  }}>
    <img src={logo} alt="logo" style={{ width: '350px', margin: '0 auto'}}/>
  </header>
);

export default Header;


