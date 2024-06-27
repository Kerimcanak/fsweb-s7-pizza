import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Navbar, NavbarBrand } from 'reactstrap';
import logo from './assets/pizzaForm/logo.svg';
import Footer from '../src/assets/iterasyon2/Footer';
import Copyright from '../src/assets/iterasyon2/Copyright';

const Success = ({ location }) => {
  const { state } = location;
  const { dataToSend } = state || {};
  const { note, toppings, selectedOption, price } = dataToSend || {};

  return (
    <div>
    
    <Navbar
    className="fixed-top"
    style={{
      height: 100,
      backgroundColor: "#C20608",
      marginBottom: "-100px"
    }}
  >
    <NavbarBrand href="/" className="position-absolute top-50 start-50 translate-middle">
      <img
        alt="logo"
        src={logo}
        style={{
          height: 40,
          width: 290,
          
        }}
      />
    </NavbarBrand>
  </Navbar>



      <div style={{ backgroundColor: '#c20608', /*as wide as screen*/   width: '100vw',
  height: '55vh', marginTop: '40px' }}>
      <Card
        className="m-auto align-self-center"
        style={{
          width: '18rem',
          //position center
          border: 'none',
          backgroundColor: '#c20608',
          //text color white
          color: 'white',
          
        }}
      >
        <CardHeader>
          Order Details
        </CardHeader>
        <CardBody>
          <CardText>
            Sipariş Notu: {note || 'Yok.'}
          </CardText>
          <CardText>
            Ek Malzemeler: {toppings.map((topping) => (
              <span key={topping}>{topping}, </span>
            ))}
          </CardText>
          <CardText>
            Boyut: {selectedOption}
          </CardText>
          <CardText>
            Price: ${price.toFixed(2)}
          </CardText>
        </CardBody>
        <CardFooter>
          Thank you for your order!
        </CardFooter>
      </Card>
      </div>
      <Footer/>
      <Copyright/>
    </div>
  );
};

export default Success;

