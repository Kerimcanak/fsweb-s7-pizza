import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, Navbar, NavbarBrand } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg"
import formbannerimage from "./form-banner.png"


function OrderPizzaITwo() {
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

  {/* form banner **/}

  <Card className="top-0 position-absolute" style={{ border: "none", backgroundColor: "#FAF7F2", width: "100%" }}>
    <CardImg
      alt="Card image cap"
      src={formbannerimage}
      top
      style={{
        width: "40%",
        marginLeft: "400px",
      }}
    />
    <CardBody>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen. genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </small>
      </CardText>
    </CardBody>
  </Card>

        </div>
      );
    }

export default OrderPizzaITwo;