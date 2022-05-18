import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './form'

class RegisterForm extends Form {
    state = { 
        data: {
            username: "",
            email: "",
            password: ""
        },
        errors: {}
     } 
    
    schema = {
       username: Joi.string().required().label("Username"),
       email: Joi.string().required().email().label("Email Address"),
       password: Joi.string().required().label("Password") 
    }

    render() { 
        return (
            <form>
                {this.renderInput({name: "username", id: "username", label: "Username"})}
                {this.renderInput({name: "email", id: "email", label: "Email"})}
                {this.renderInput({name: "password", id: "password", label: "Password"})}
                {this.renderButton({label: "Submit"})}
            </form>
        );
    }
}
 
export default RegisterForm;