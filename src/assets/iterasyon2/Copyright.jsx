import React from "react";
import { FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <div
            style={{
                borderTop: "2px solid #2b2b2b",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1a1a1a",
                height: "60px",
                width: "100%",
            }}
        >
        
            <p style={{textAlign: 'left', paddingLeft: '130px', paddingTop: '20px', fontFamily: 'Roboto Condensed', fontSize: '12px', margin: 0, color:"#bababa"}}>
                &copy; Teknolojik Yemekler. <FaTwitter style={{color: 'white', marginLeft: '1100px', fontSize: '17px'}} />
                
            </p> 
        </div>
    );
}

export default Footer;