import React from 'react';
import HeaderForm from './assets/pizzaForm/headerForm';
import HeaderTextOrder from './assets/pizzaForm/headerTextOrder';

const OrderPizzaComplete = () => {
  return (
    <div>
      <HeaderForm style={{ marginBottom: '20px' }} />
      <HeaderTextOrder />
    </div>
  );
}

export default OrderPizzaComplete;
