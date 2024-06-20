import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import User from "../user";

// This component allows the user to enter their name and submit it to the server
const PizzaFormName = () => {
  const [name, setName] = useState(User.name); // State to store the user's name
  const [validName, setValidName] = useState(true); // State to indicate if the name is valid

  // Handles changes to the name input field
  const handleChange = (event) => {
    const inputName = event.target.value;
    setName(inputName);
    setValidName(inputName.length >= 3); // Set validName based on the length of the inputName
  };

  // Handles the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://reqres.in/api/pizzas', {name}); // Send a POST request to the server with the name
      const updatedUser = { ...User, name }; // Update the User object with the new name
      console.log(updatedUser); // Log the updated User object
      
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
        {/* Display an error message if the name is invalid and not empty */}
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

// Render the component with the User object as a prop
export default PizzaFormName;

// Note: The User object is imported from the "../user" file. It is used to store the user's name and other information.
// Note: The handleChange function updates the name state based on the input field value.
// Note: The handleSubmit function sends a POST request to the server with the name and updates the User object with the new name.
// Note: The form submission is prevented by default and the handleSubmit function is called when the form is submitted.
// Note: The code is commented to provide clarity and understanding.

