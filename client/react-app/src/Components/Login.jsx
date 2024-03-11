import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = ({authorize}) => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const submit = async (data) => {
    try {
        const res = await axios.post('https://mobile-models.onrender.com/login', data);
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
        <input placeholder='User Name'
          {...register('username', {
            required: 'username is required'
          })}
        />
        <input placeholder='Password'
          {...register('password', {
            required: 'password is required'
          })}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Login;
