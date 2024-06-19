import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import User from "../user";

const PizzaFormName = () => {
  const [name, setName] = useState(User.name);
  const [validName, setValidName] = useState(true);

  const handleChange = (event) => {
    const inputName = event.target.value;
    setName(inputName);
    setValidName(inputName.length >= 3);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://reqres.in/api/pizzas', {name});
      User.name = name;
      console.log(User);

      // Redirect to the specified page after form submission
      window.location.href = "/order-pizza/options";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <form onSubmit={handleSubmit}>
        <label style={{ fontFamily: "Roboto Condensed", fontSize: "24pt", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>İsim</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={handleChange}
          style={{ fontFamily: "Roboto Condensed", fontSize: "14pt", height: "20px", padding: "10px", width: "350px", marginBottom: "24px" }}
        />
        {!validName && name.length > 0 && (
          <div style={{ color: "red", fontFamily: "Roboto Condensed" }}>
            İsim en az üç harf olmalı
          </div>
        )}
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            to="/order-pizza/options"
            style={{
              textDecoration: 'none',
            }}
          >
            <button style={{
              borderRadius: "30%",
              backgroundColor: validName ? "#fdc913" : "#ccc",
              color: "#fff",
              padding: "10px 40px",
              border: "none",
              cursor: validName ? "pointer" : "not-allowed",
              marginTop: "24px"
            }} disabled={!validName}>
              İlerle
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PizzaFormName;
