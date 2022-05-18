import React, { Component } from 'react';

const FormButton = ({label, type}) => {
    return ( 
        <button type={type} className="btn btn-primary m-2">{label}</button>

     );
}
 
export default FormButton;