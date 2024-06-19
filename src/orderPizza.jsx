import React from 'react';
import HeaderForm from './assets/pizzaForm/headerForm';
import HeaderTextMain from './assets/pizzaForm/headerText';
import PizzaFormName from './assets/pizzaForm/pizzaFormName';

const OrderPizza = () => {
  return (
    <div>
      <HeaderForm style={{ marginBottom: '20px' }} />
      <HeaderTextMain />
      <PizzaFormName />
    </div>
  );
}

export default OrderPizza;
