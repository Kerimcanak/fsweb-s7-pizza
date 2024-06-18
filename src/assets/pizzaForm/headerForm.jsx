import React from 'react';
import logo from './logo.svg';

/**
 * Renders a header component with a logo.
 *
 * @return {JSX.Element} The header component.
 */
const HeaderForm = () => (
  <header style={{
    paddingTop: '50px',
    paddingBottom: '25px',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    padding: '0em',
    margin: 0,
    backgroundColor: '#c20608'
  }}>
    <img src={logo} alt="logo" style={{ width: '350px', margin: '0 auto'}}/>
  </header>
);

export default HeaderForm;
