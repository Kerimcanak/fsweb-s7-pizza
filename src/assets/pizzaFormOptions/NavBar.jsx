import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import IconKore from './icons/1.svg';
import IconPizza from './icons/2.svg';
import IconBurger from './icons/3.svg';
import IconKızartma from './icons/4.svg';
import IconFastFood from './icons/5.svg';
import IconGazlıIçecek from './icons/6.svg';

const Navbar = () => {
  const listStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    transform: 'translate(20px, 170px)', // Move the list 20px to the right and 20px down
  };

  return (
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <ul style={listStyle}>
        <li style={{ margin: '0 10px' }}><img src={IconKore} alt="Kore" style={{ width: '20px', height: '20px', marginRight: '5px' }}/> Kore</li>
        <li style={{ margin: '0 10px' }}>
          <Router>
            <li>
              <a href="/order-pizza/complete/pizza" style={{ textDecoration: 'none', color: 'black' }}>
                <img src={IconPizza} alt="Pizza" style={{ width: '20px', height: '20px', marginRight: '5px' }}/> Pizza
              </a>
            </li>
          </Router>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Router>
            <li>
              <a href="/order-pizza/complete/burger" style={{ textDecoration: 'none', color: 'black' }}>
                <img src={IconBurger} alt="Burger" style={{ width: '20px', height: '20px', marginRight: '5px' }}/> Burger
              </a>
            </li>
          </Router>
        </li>
        <li style={{ margin: '0 10px' }}><img src={IconKızartma} alt="Kızartma" style={{ width: '20px', height: '20px', marginRight: '5px' }}/> Kızartma</li>
        <li style={{ margin: '0 10px' }}><img src={IconFastFood} alt="Fast food" style={{ width: '20px', height: '20px', marginRight: '5px' }}/> Fast food</li>
        <li style={{ margin: '0 10px' }}><img src={IconGazlıIçecek} alt="Gazlı içecek" style={{ width: '20px', height: '20px', marginRight: '5px' }}/> Gazlı içecek</li>
      </ul>
    </div>
  );
};

export default Navbar;


