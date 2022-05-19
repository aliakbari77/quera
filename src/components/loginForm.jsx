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

    async doSubmit () {
        const email = this.state.data.username
        const password = this.state.data.password
        const data = await axios.post("http://localhost:3900/api/auth", {
            email,
            password
        })
        console.log(data);  
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "username", "Username")}
                {this.renderInput("password", "password", "Password", "password")}
                {this.renderButton({label: "Login"})}
            </form>
        );
    }
}
 
export default Login;