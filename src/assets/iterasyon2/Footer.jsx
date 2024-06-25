import React from "react";
import logofooter from "./footer/logo-footer.svg";
import icon1 from "./footer/icons/icon-1.png";
import icon2 from "./footer/icons/icon-2.png";
import icon3 from "./footer/icons/icon-3.png";
import "./Footer.css";


function Footer() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1a1a1a",
                height: "400px",
                width: "100%",
            }}
        > <img src={logofooter} alt="logofooter" style={{ width: "150px", marginTop: "40px", marginRight: "920px" }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "left", marginTop: "20px",marginRight: "920px" }}>
        <li style={{  alignItems: "left" }}>
            <p style={{ color: "#bababa", fontFamily: "Roboto Condensed", fontSize: "24px", margin: 0 }}><img src={icon1} alt="icon1" />+90 555 555 55 55</p>
            
            <p style={{ color: "#bababa", fontFamily: "Roboto Condensed", fontSize: "24px", margin: 0 }}><img src={icon2} alt="icon1" />+90 555 555 55 55</p>
            
            <p style={{ color: "#bababa", fontFamily: "Roboto Condensed", fontSize: "24px", margin: 0 }}><img src={icon3} alt="icon1" />+90 555 555 55 55</p>
        </li>
        <li>

        </li>
        <div></div>
        <li></li>
        </div>
        </div>
    );
}

export default Footer;