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
        const {data} = await axios.post("http://localhost:3900/auth", {
            email: this.state.data.username,
            password: this.state.data.password
        })
        console.log(data);
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput({name: "username", id: "username", label: "Username"})}
                {this.renderInput({name: "password", id: "password", label: "Password"})}
                {this.renderButton({label: "Login"})}
            </form>
        );
    }
}
 
export default Login;