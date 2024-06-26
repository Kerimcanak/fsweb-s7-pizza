import React, { useState, useEffect, useRef } from 'react';
import Header from './assets/homePage/header';
import homeBanner from './assets/homePage/home-banner.png';
import Navbar from './assets/iterasyon2/NavBar';
import Footer from './assets/iterasyon2/Footer';
import Copyright from './assets/iterasyon2/Copyright';
import kart1 from './assets/iterasyon2/kart-1.png';
import kart2 from './assets/iterasyon2/kart-2.png';
import kart3 from './assets/iterasyon2/kart-3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, ButtonGroup, Button, CardBody, CardSubtitle } from 'reactstrap';


function MainPage() {
  const [count, setCount] = useState(0);
  const animationRef = useRef(null); // Reference to the animation element

  const handleClick = () => {
    // Play the animation
    document.body.classList.add('animate-out'); // Add the animation class to the body element
  
    // After the animation is complete, navigate to the order-pizza page
    setTimeout(() => {
      window.location.href = '/order-pizza/main'; // Use window.location.href to navigate
    }, 1000); // Adjust the animation duration as needed
  };

  useEffect(() => {
    // Add a click event listener to the animation element
    animationRef.current.addEventListener('animationend', () => {});
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${homeBanner})`,
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Header />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: '#FDC913', fontFamily: '"Satisfy", cursive', fontStyle: 'italic', fontSize: '24px', textAlign: 'center', marginTop: '140px', marginBottom: 0 }}>fırsatı kaçırma</p>
          <h2 style={{ color: 'white', fontFamily: 'Roboto Condensed', fontSize: '68px', textAlign: 'center', transform: 'scale(0.5, 1)' }}>
            KOD ACIKTIRIR
            <br />
            PIZZA, DOYURUR
          </h2>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button style={{backgroundColor: 'yellow', border: 'none', borderRadius: '10px', padding: '10px 20px', fontSize: '24px', fontWeight: 'bold', cursor: 'pointer'}} onClick={handleClick} ref={animationRef}>
            <span className="button-text-large">ACIKTIM</span>
          </button>
        </div>
      </div>
      <Navbar />
      <div className="içerik" style={{ height: '1200px', backgroundColor: '#faf7f2' }} >
      <div style={{ height: '40px', backgroundColor: '#faf7f2' }}></div>

        {/* kartlar */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div>
            <Card inverse style={{ marginLeft: '280px'}}>
              <CardImg
                alt="Card image cap"
                src={kart1}
                style={{
                  height: 400
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle tag="h5">
                  Card Title
                </CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <CardText>
                  <small className="text-muted">
                    Last updated 3 mins ago
                  </small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '10px' }}>
      <div>
            <Card inverse >
              <CardImg
                alt="Card image cap"
                src={kart2}
                style={{
                  height: 200
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle tag="h5">
                  Card Title
                </CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <CardText>
                  <small className="text-muted">
                    Last updated 3 mins ago
                  </small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
      
          <div>
            <Card inverse >
              <CardImg
                alt="Card image cap"
                src={kart3}
                style={{
                  height: 200
                }}
                width="100%"
              />
              <CardImgOverlay>
                <CardTitle tag="h5">
                  Card Title
                </CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                <CardText>
                  <small className="text-muted">
                    Last updated 3 mins ago
                  </small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>

      </div>
      </div>

      {/* yemekler */}

      <p style={{ color: '#c20608', fontFamily: '"Satisfy", cursive', fontStyle: 'italic', fontSize: '24px', textAlign: 'center', marginTop: '100px', marginBottom: 0 }}>en çok paketlenen menüler</p>
      <h2 style={{ color: 'black', fontFamily: 'Roboto Condensed', fontSize: '38px', textAlign: 'center', marginTop: '20px'}}>
                Acıktıran Kodlara Doyuran Lezzetler
            </h2>

      {/* yemekler */}

      <div className='butonlar'>
      <div style={{ paddingLeft: '440px', marginTop: '40px', scale: '1.5' }}>
        <ButtonGroup style={{ marginRight: '20px' }}>
        <Button style={{ backgroundColor: 'white', borderColor: 'white', color: 'black' }}>
          Ramen
        </Button>
        </ButtonGroup>
        <ButtonGroup style={{ marginRight: '20px' }}>
        <Button style={{ backgroundColor: 'white', borderColor: 'white', color: 'black' }}>
          Pizza
        </Button>
        </ButtonGroup>
        <ButtonGroup style={{ marginRight: '20px' }}>
        <Button style={{ backgroundColor: 'white', borderColor: 'white', color: 'black' }}>
          Burger
        </Button>
        </ButtonGroup>
        <ButtonGroup style={{ marginRight: '20px' }}>
        <Button style={{ backgroundColor: 'white', borderColor: 'white', color: 'black' }}>
          French Fries
        </Button>
        </ButtonGroup>
        <ButtonGroup style={{ marginRight: '20px' }}>
        <Button style={{ backgroundColor: 'white', borderColor: 'white', color: 'black' }}>
          Fast Food
        </Button>
        </ButtonGroup>
        <ButtonGroup>
        <Button style={{ backgroundColor: 'white', borderColor: 'white', color: 'black' }}>
          Soft Drink
        </Button>
        </ButtonGroup>
      </div>
      </div>

      {/* yemek kartları */}

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '50px', gap: '20px' }}>
      <Card
      style={{
        width: '18rem'
      }}    >
      <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
        </Button>
        </CardBody>
      </Card>
      <Card
      style={{
        width: '18rem'
      }}    >
      <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
        </Button>
        </CardBody>
      </Card>
      <Card
      style={{
        width: '18rem'
      }}    >
      <img
        alt="Sample"
        src="https://picsum.photos/300/200"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
        </Button>
        </CardBody>
      </Card>
      </div>
      
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default MainPage;

