import React from "react";
import logofooter from "./footer/logo-footer.svg";
import icon1 from "./footer/icons/icon-1.png";
import icon2 from "./footer/icons/icon-2.png";
import icon3 from "./footer/icons/icon-3.png";
import "./Footer.css";
import i1 from "./footer/insta/li-0.png";
import i2 from "./footer/insta/li-1.png";
import i3 from "./footer/insta/li-2.png";
import i4 from "./footer/insta/li-3.png";
import i5 from "./footer/insta/li-4.png";

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
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "left",
          marginTop: "20px",
        }}
      >
        <img
          src={logofooter}
          alt="logofooter"
          style={{ width: "150px", marginTop: "40px", marginRight: "920px" }}
        />
      </div>

<div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: "20px", gap: "45px"}}>
  <li style={{ marginRight: "20px" }}>
    <p style={{ color: "#bababa", fontFamily: "Roboto Condensed", fontSize: "24px", margin: 0 }}>
      <img src={icon1} alt="icon1" /> +90 555 555 55 55
    </p>
    <p style={{ color: "#bababa", fontFamily: "Roboto Condensed", fontSize: "24px", margin: 0 }}>
      <img src={icon2} alt="icon2" /> +90 555 555 55 55
    </p>
    <p style={{ color: "#bababa", fontFamily: "Roboto Condensed", fontSize: "24px", margin: 0 }}>
      <img src={icon3} alt="icon3" /> +90 555 555 55 55
    </p>
  </li>
  <li style={{ alignItems: "left" }}>
    <h5 style={{ color: "white", fontFamily: "Roboto Condensed", fontSize: "24px", margin: 0 }}>Yemekler</h5>
    <p style={{ color: "#bababa", fontFamily: "Roboto Condensed", fontSize: "24px", margin: 0 }}>Terminal Pizza</p>
    <p style={{ color: "#bababa", fontFamily: "Roboto Condensed", fontSize: "24px", margin: 0 }}>5 Kişilik Hackathlon Pizza</p>
    <p style={{ color: "#bababa", fontFamily: "Roboto Condensed", fontSize: "24px", margin: 0 }}>useEffect Tavuklu Pizza</p>
  </li>
  <li style={{ alignItems: "left"}}>
            <h5 style={{ color: "white", fontFamily: "Roboto Condensed", fontSize: "24px", margin: 0 }}>Instagram</h5>
            <img src={i1} alt="i1" />
            <img src={i2} alt="i2" />
            <img src={i3} alt="i3" />
            <img src={i4} alt="i4" />
            <img src={i5} alt="i5" />
    </li>
</div>

    </div>
  );
}

export default Footer;
