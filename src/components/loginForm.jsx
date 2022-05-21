import  Joi  from 'joi-browser';
import React, { Component } from 'react';
import Form from "./form"
import axios from 'axios'
import config from '../config.json'
import jwtDecode from 'jwt-decode'
import { ToastContainer } from 'react-toastify';
import {toast} from 'react-toastify'
import { delay } from 'lodash';

class Login extends Form {
    state = { 
        data : {
            username: "",
            password: ""
        },
        errors: {}
     }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    async doSubmit () {
        try {
            const email = this.state.data.username
            const password = this.state.data.password
            const {data: jwt} = await axios.post(config.apiUrl + "/auth", {
                email,
                password
            })
            console.log(jwt);  
            const user = jwtDecode(jwt)
            console.log(user);
            window.location = "/"
            localStorage.setItem('user_key', jwt)
        } catch (err) {
            console.log(err.response);
            toast.error(err.response.data)
        }
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <ToastContainer/>
                {this.renderInput("username", "username", "Username")}
                {this.renderInput("password", "password", "Password", "password")}
                {this.renderButton({label: "Login"})}
            </form>
        );
    }
}
 
export default Login;