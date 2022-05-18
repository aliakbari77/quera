import React, { Component } from 'react';

const FormButton = ({label, }) => {
    return ( 
        <button type={'submit'} className="btn btn-primary m-2">{label}</button>

     );
}
 
export default FormButton;