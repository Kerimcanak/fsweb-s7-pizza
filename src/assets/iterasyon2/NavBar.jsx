import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import IconKore from './icons/1.svg';
import IconPizza from './icons/2.svg';
import IconBurger from './icons/3.svg';
import IconKızartma from './icons/4.svg';
import IconFastFood from './icons/5.svg';
import IconGazlıIçecek from './icons/6.svg';
import './NavBar.css';

const Navbar = () => (
  <div>
    <ul>
      <li><img src={IconKore} alt="Kore"/> Kore</li>
      <Router>
        <li>
        <img src={IconPizza} alt="Pizza"/>
          <a href="/orderpizza">Pizza</a>
        </li>
      </Router>
      <Router>
        <li>
        <img src={IconBurger} alt="Burger"/>
          Burger
        </li>
      </Router>
      <li><img src={IconKızartma} alt="Kızartma"/> Kızartma</li>
      <li><img src={IconFastFood} alt="Fast food"/> Fast food</li>
      <li><img src={IconGazlıIçecek} alt="Gazlı içecek"/> Gazlı içecek</li>
    </ul>
  </div>
);

export default Navbar;

