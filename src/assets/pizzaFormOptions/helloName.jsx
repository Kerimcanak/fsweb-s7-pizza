import React from "react";
import User from "../user";


const HelloName = () => {
    return (
        <div style={{ transform: 'translate(-50%, -50%)', position: 'absolute', top: '50%', left: '50%' }}>
            <h1 style={{ textAlign: "center" }}>Merhaba {User.name}!</h1>
        </div>
    );
};



export default HelloName;

