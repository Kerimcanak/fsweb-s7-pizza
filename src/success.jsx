import React, { useEffect, Fragment } from 'react';
import HeaderForm from './assets/pizzaForm/headerForm';

const Success = () => {
  useEffect(() => {
    document.body.style.background = '#c20608';
  }, []);

  return (
    <Fragment>
      <HeaderForm />
      <h2>TEBRIKLER! <br /> SIPARIŞINIZ ALINDI!</h2>
    </Fragment>
  );
};

export default Success;

