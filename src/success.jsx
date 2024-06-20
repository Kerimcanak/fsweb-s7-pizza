import React, { useEffect, Fragment } from 'react';
import HeaderForm from './assets/pizzaForm/headerForm';
import './success.css';


const Success = () => {
  useEffect(() => {
    document.body.style.background = '#c20608';
  }, []);

  return (
    <div>
      <HeaderForm />
      <h2  className='animate-success'>TEBRIKLER! <br /> SIPARIŞINIZ ALINDI!</h2>
    </div>
  );
};

export default Success;


