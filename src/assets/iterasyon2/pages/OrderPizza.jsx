import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg"
import FormBanner from '../FormBanner.jsx'
import Formİcerik from "../Formİcerik.jsx";
import Footer from '../Footer';
import Copyright from '../Copyright';

function OrderPizzaITwo() {
    return (
        <>
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

        </div>

            
        <FormBanner/>

        <Formİcerik/>
        <Footer/>

        <Copyright/>

          </>
          
      );
    }

export default OrderPizzaITwo;