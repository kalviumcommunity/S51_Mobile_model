import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddData.css"

const Login = ({authorize}) => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const submit = async (data) => {
    try {
        const res = await axios.post('http://localhost:7000/login', data);
        document.cookie = `authtoken=${res.data.authtoken}`
        console.log(res, 'effq');
        authorize(true)
    } catch (error) {
        document.cookie = `authtoken=${null}`
        
        console.log(error.message)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input
          {...register('username', {
            required: 'username is required'
          })}
        />
        <input
          {...register('password', {
            required: 'password is required'
          })}
        />
        <button id='Submit' type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Login;
