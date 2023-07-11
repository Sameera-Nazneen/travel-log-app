import React from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    localStorage.setItem(data.email, JSON.stringify({username:data.username, password:data.password}));
    console.log(JSON.parse(localStorage.getItem(data.email)));
    alert("User registered successfully");
  }

 

  return (
    <div className='container'>
    <div className="register-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">Name</label>
        <input
          className="input"
          {...register('username', { required: true })}
          type="text"
          placeholder="Your name..."
        />
        {errors.username && <span>*This field is required</span>}

        <label className="label">Email</label>
        <input
          className="input"
          {...register('email', { required: true })}
          type="email"
        />
        {errors.email && <span>*This field is required</span>}

        <label className="label">Password</label>
        <input
          className="input"
          {...register('password', { required: true })}
          type="password"
        />
        {errors.password && <span>*This field is required</span>}

        <input type="submit" className="submitBtn"  value="Submit" />
      </form>
    </div>
    </div>
  );
};

export default Register;
