import React from 'react';
import HeaderForm from './assets/pizzaForm/headerForm';
import HeaderTextMain from './assets/pizzaForm/headerText';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const OrderPizza = () => {
  return (
    <div>
      <HeaderForm style={{ marginBottom: '20px' }} />
      <HeaderTextMain />
      <FormGroup>
          <Label for="userName">İsim</Label>
          <Input type="name" name="isim" id="userName" placeholder="name placeholder" />
        </FormGroup>
    </div>
  );
}

export default OrderPizza;
