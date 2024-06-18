import React from 'react';
import HeaderForm from './assets/pizzaForm/headerForm';
import HeaderTextMain from './assets/pizzaForm/headerText';

const OrderPizza = () => {
  return (
    <div>
      <HeaderForm style={{ marginBottom: '20px' }} />
      <HeaderTextMain />
    </div>
  );
}

export default OrderPizza;
