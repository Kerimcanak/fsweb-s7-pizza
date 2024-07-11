import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Navbar, NavbarBrand } from 'reactstrap';
import logo from './assets/pizzaForm/logo.svg';
import Footer from '../src/assets/iterasyon2/Footer';
import Copyright from '../src/assets/iterasyon2/Copyright';

const Success = ({ location }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { state } = location;
  const { dataToSend } = state || {};
  const { note, toppings, selectedOption, price, quantity, selectedDough } = dataToSend || {};

  return (
    <div>
    
    <Navbar
    id='#'
    className="fixed-top"
    autofocus
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
  height: '85vh', marginTop: '100px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80px', backgroundColor: '#c20608' }}>
      <Card body style={{border: 'none', backgroundColor: '#c20608', color: 'white'}}>
      <CardText style={{fontFamily: 'Satisfy', fontSize: '26px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fdc913'}}>
        lezzetin yolda
      </CardText>
      <CardTitle tag="h5" style={{fontFamily: 'Barlow', fontSize: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        SİPARİŞ ALINDI
      </CardTitle>

      <hr style={{ width: '800px', backgroundColor: '#ffffff', height: '3px' }}></hr>
    </Card>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card
        className=""
        style={{
          width: '18rem',
          //position center
          border: 'none',
          backgroundColor: '#c20608',
          //text color white
          color: 'white',
          marginTop: '120px',
          
        }}
      >
        <CardHeader>
          Sipariş Detayları
        </CardHeader>
        <CardBody>
          <CardText>
            Sipariş Notu: {note || 'Yok.'}
          </CardText>
          <CardText>
            Ek Malzemeler: {toppings.map((topping, index) => (
              <span key={topping}>
                {topping}
                {index < toppings.length - 1 ? ', ' : ''}
              </span>
            ))}
          </CardText>
          <CardText>
            Boyut: {selectedOption}
          </CardText>
          <CardText>
            Adet: {quantity}
          </CardText>
          <CardText>
            Hamur: {selectedDough}
          </CardText>
          <CardText>
            Price: ${price.toFixed(2)}
          </CardText>
        </CardBody>
        <CardFooter>
          Siparişiniz için teşekkürler!
        </CardFooter>
      </Card>
      </div>
      </div>
      <Footer/>
      <Copyright/>
    </div>
  );
};

export default Success;

