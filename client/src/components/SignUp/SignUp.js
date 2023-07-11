import React from 'react';
import { useForm } from 'react-hook-form';
import "./SignUp.css";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const userData = JSON.parse(localStorage.getItem(data.email));
        console.log(userData)
        if (userData) {
            if (userData.password === data.password) {
                console.log(userData.username + " Succefully registered");
            }
            else {
                console.log("Email or password doesn't match");
            }
        }
        else {
            console.log("userdata didn't found");
        }
    }

    return (
        <div className='container'>

            <div className='signup-form '>

                <h1 style={{ padding: "10px" }}>SignUp form</h1>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <label className='label'>Email</label>
                    <input className="input" type='text' {...register("email", { required: true })} />
                    {errors.email && <span>*This field is required</span>}

                    <label className='label'>Password</label>
                    <input className="input" type='password' {...register("password", { required: true })} />
                    {errors.password && <span>*This field is required</span>}

                    <input type="submit" className="submitBtn" onClick={() => navigate('/home')} value="Submit" />
                </form>

            </div>
        </div>
    );
};

export default SignUp;

