import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './form'
import axios from 'axios'

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
        const data = this.state.data
        const {email, password, username: name} = data
        const response = await axios.post("http://localhost:3900/api/users", {
            email,
            password,
            name
        })
        console.log(response);
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput({name: "email", id: "email", label: "Email"})}
                {this.renderInput({name: "password", id: "password", label: "Password"})}
                {this.renderInput({name: "username", id: "username", label: "Username"})}
                {this.renderButton({label: "Submit"})}
            </form>
        );
    }
}
 
export default RegisterForm;