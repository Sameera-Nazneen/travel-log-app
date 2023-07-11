import React from 'react';
import "./LoginPage.css";

import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className='container'>
           <div className='buttons-container'>
            <button className='btn' onClick={()=>navigate("/Register")}>SignIn</button>
            
            <button className='btn' onClick={()=>navigate("/SignUp")}>SignUp</button>
            </div>
        </div>
    );
};

export default LoginPage;