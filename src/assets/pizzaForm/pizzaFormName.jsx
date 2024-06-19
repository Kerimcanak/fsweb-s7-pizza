import React, { useState } from "react";

const PizzaFormName = () => {
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);

  const handleChange = (event) => {
    const inputName = event.target.value;
    setName(inputName);
    if (inputName.length < 3) {
      setValidName(false);
    } else {
      setValidName(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ fontFamily: "Roboto Condensed" }}>İsim</label>
      <br />
      <input
        type="text"
        value={name}
        onChange={handleChange}
        style={{ fontFamily: "Roboto Condensed" }}
      />
      {!validName && (
        <div style={{ color: "red", fontFamily: "Roboto Condensed" }}>
          Isim en az üç harf olmalı
        </div>
      )}
      {validName && (
        <div style={{ color: "green", fontFamily: "Roboto Condensed" }}>
          true - {name}
        </div>
      )}
    </form>
  );
};

export default PizzaFormName;
