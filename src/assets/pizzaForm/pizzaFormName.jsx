import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import User from "../user";
import { useForm } from "react-hook-form";

const PizzaFormName = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      await axios.post('https://reqres.in/api/pizzas', data);
      const updatedUser = { ...User, ...data };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      history.push('/order-pizza/options'); // Use history.push to navigate
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        İsim:
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PizzaFormName;

