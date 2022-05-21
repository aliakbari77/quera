import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './form'
import axios from 'axios'
import config from '../config.json'
import {ToastContainer} from 'react-toastify'
import {toast} from 'react-toastify'

class RegisterForm extends Form {
    state = { 
        data: {
            email: "",
            password: "",
            username: "",
        },
        errors: {}
     } 
    
    schema = {
       email: Joi.string().required().email().label("Email Address"),
       password: Joi.string().required().label("Password"), 
       username: Joi.string().required().label("Username"),
    }

    async doSubmit () {
        try {
            const data = this.state.data
            const {email, password, username: name} = data
            const response = await axios.post(config.apiUrl + "/users", {
                email,
                password,
                name
            })
            console.log(response);
            const jwt = response.headers['x-auth-token']
            localStorage.setItem("user_key", jwt)
            console.log(jwt)
            window.location = "/"
            
        } catch (err) {
            console.log(err)
            toast.error(err.response.data)
        }
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <ToastContainer/>
                {this.renderInput("email", "email", "Email")}
                {this.renderInput("password", "password", "Password", "password")}
                {this.renderInput("username",  "username", "Username")}
                {this.renderButton({label: "Submit"})}
            </form>
        );
    }
}
 
export default RegisterForm;