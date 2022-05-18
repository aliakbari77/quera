import React, { Component } from 'react';
import FormButton from './formButton';
import FormInput from './formInput';
import Joi, { errors } from 'joi-browser'

class Form extends Component {
    state = { 
        data: {},
        errors: {}
     } 

    handleSubmit = (e) => {
        e.preventDefault()

        const errros = this.validate()
        this.setState({errors: errors || null})
        if (errors) return

        this.doSubmit()
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input)
        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name] 
        const data = {...this.state.data}
        data[input.name] = input.value
        this.setState({data, errors})
    }

    validate = () => {
        const options = { abortEarly: false}
        const {error} = Joi.validate(this.state.data, this.schema, options)
        if (!error) return null
        const errors = {}
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors
    }

    validateProperty = ({name, value}) => {
        const obj = {[name]: value}
        const schema = {[name]: this.schema[name]}
        const {error} = Joi.validate(obj, schema)
        return error ? error.details[0].message : null
    }

    renderInput = ({name, id, label, type= "text"}) => {
        return (
            <FormInput  
                name={name}
                id={id}
                type={type}
                label={label}
                onChange={this.handleChange}
                error={this.state.errors[name]}
            />
        )
    }

    renderButton = ({label = "Submit"}) => {
        return (
        <FormButton
            label={label}
        />)
    }

}

export default Form;
