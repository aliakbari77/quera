import  Joi  from 'joi-browser';
import React, { Component } from 'react';
import Form from "./form"
import axios from 'axios'

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

    doSubmit () {
        console.log(this.state.data)
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "username", "Username")}
                {this.renderInput("password", "password", "Password")}
                {this.renderButton({label: "Login"})}
            </form>
        );
    }
}
 
export default Login;