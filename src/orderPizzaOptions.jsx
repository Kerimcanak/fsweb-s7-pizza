import React from 'react';
import HeaderForm from './assets/pizzaForm/headerForm';
import HeaderTextOptions from './assets/pizzaForm/headerTextOptions';
import Navbar from './assets/pizzaFormOptions/NavBar';
import RoundedBoxWithImageAndText from './assets/pizzaFormOptions/boxLeft';
import RoundedBoxesWithImageAndText from './assets/pizzaFormOptions/boxesRight';
import { HelloName } from './assets/pizzaForm/pizzaFormName';

const OrderPizzaOptions = () => {
  return (
    <div>
      <HeaderForm style={{ marginBottom: '20px' }} />
      <HeaderTextOptions />
      <Navbar />
      <RoundedBoxWithImageAndText />
      <RoundedBoxesWithImageAndText />
    </div>
  );
}

export default OrderPizzaOptions;
