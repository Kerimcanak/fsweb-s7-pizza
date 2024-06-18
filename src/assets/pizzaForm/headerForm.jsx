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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0em',
    margin: 0,
    backgroundColor: '#c20608'
  }}>
    <div style={{ height: '50px', backgroundColor: '#c20608' }} />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={logo} alt="logo" style={{ width: '350px', margin: '0 auto', alignSelf: 'center' }} />
    </div>
    <div style={{ height: '40px', backgroundColor: '#c20608' }} />
    <div style={{
      display: 'flex',
      alignItems: 'left',
      justifyContent: 'left',
      textAlign: 'left',
      width: '100%',
      paddingLeft: '60em',
      color: 'white', // Added color property to make text white
      backgroundColor: '#c20608', // Added background color to match header background
    }}>
      Anasayfa - Seçenekler - Sipariş Oluştur
    </div>
    <div style={{ height: '20px', backgroundColor: '#c20608' }} />
  </header>
);

export default HeaderForm;
