import React from 'react';
import HeaderForm from './assets/pizzaForm/headerForm';
import HeaderTextOptions from './assets/pizzaForm/headerTextOptions';

const OrderPizzaOptions = () => {
  return (
    <div>
      <HeaderForm style={{ marginBottom: '20px' }} />
      <HeaderTextOptions />
    </div>
  );
}

export default OrderPizzaOptions;
