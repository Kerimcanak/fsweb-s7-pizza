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
      if (data.name.length < 3) {
        throw new Error('İsim en az üç harften oluşturulmalıdır');
      }
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
        <input type="text" {...register('name', { required: true, minLength: 3 })} />
        {errors.name && <span>İsim en az üç harften oluşturulmalıdır</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PizzaFormName;

