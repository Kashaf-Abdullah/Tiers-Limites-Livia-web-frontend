




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value });
    };

    const loginUser = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/login', loginFormData);
            alert(response.data.msg);
            localStorage.setItem('accessToken', response.data.accessToken); // Save token to localStorage
            setIsLoggedIn(true); // Update the isLoggedIn state
            navigate('/admin');
        } catch (error) {
            alert(error.response.data.msg);
        }
    };

    // Check if user is already logged in (persistent login)
    // If yes, redirect to admin page
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            setIsLoggedIn(true);
            navigate('/admin');
        }
    }, []);

    return (
        <div className="login-form" style={{ marginTop: "4rem" }}>    
            <form onSubmit={loginUser}>
                <div className="avatar">
                    <i className="material-icons"><FaUser/></i>
                </div>
                <h4 className="modal-title">Login to Your Account</h4>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Enter Email"
                        className="form-control" 
                        id="loginEmail" 
                        name="email"
                        value={loginFormData.email}
                        onChange={handleLoginChange}
                        required
                    /> 
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder="Enter Password"
                        className="form-control"                     
                        id="loginPassword"
                        name="password"
                        value={loginFormData.password}
                        onChange={handleLoginChange} 
                        required
                    />
                </div>
               
                <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>              
            </form>			
               </div>
    );
}

export default Login;
