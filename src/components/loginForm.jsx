import  Joi  from 'joi-browser';
import React, { Component } from 'react';
import Form from "./form"

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
        console.log(this.state.data);
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput({name: "username", id: "username", label: "Username"})}
                {this.renderInput({name: "password", id: "password", label: "Password"})}
                {this.renderButton({text: "login"})}
            </form>
        );
    }
}
 
export default Login;