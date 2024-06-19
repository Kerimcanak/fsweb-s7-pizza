import React, { useState } from "react";

const PizzaFormName = () => {
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(true);

  const handleChange = (event) => {
    const inputName = event.target.value;
    setName(inputName);
    setValidName(inputName.length >= 3);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <form onSubmit={handleSubmit}>
        <label style={{ 
          fontFamily: "Roboto Condensed", 
          fontSize: "24pt",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
          }}>İsim</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={handleChange}
          style={{ 
            fontFamily: "Roboto Condensed",
            fontSize: "14pt",
            height: "20px", // adjust the height to your liking
            padding: "10px", // add some padding for better usability
            width: "350px" // adjust the width to your liking 
            }}
        />
        {!validName && name.length > 0 && (
          <div style={{ color: "red", fontFamily: "Roboto Condensed" }}>
            İsim en az üç harf olmalı
          </div>
        )}
      </form>
    </div>
  );
};

export default PizzaFormName;


