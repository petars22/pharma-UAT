import React from 'react';
import { Redirect } from 'react-router-dom';

import callApi from '../../utils/functions/callApi';

import logo from './../../assets/images/logo-placeholder.jpg';
import './Login.css';

export default function Login(props) {
    let formData = {
        username: "",
        password: ""
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await callApi(
            "POST",
            "user/logIn",
            formData
        );
        
        if(res.error) {}
        else {
            sessionStorage.setItem("userData", JSON.stringify(res));
            props.setSessionData({isLoggedIn: true, userData: res});
            return (<Redirect to="/" />);
        }
    }

    return (
        <div id="login-container">
            <div id="login-inner">
                <img src={ logo } alt="logo" width="100%"/>
                <h2>Sign In to Pharma App</h2>
                <form onSubmit={handleSubmit}>
                    <p className="margin-bottom">
                        <input
                            type="text"
                            placeholder="Username"
                            onChange={(e) => formData.username = e.target.value}
                        />
                    </p>
                    <p className="margin-bottom">
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => formData.password = e.target.value}
                        />
                    </p>
                    <input type="submit" value="Log In" className="light-blue-button button"/>
                </form>
            </div>
        </div>
    );
};
