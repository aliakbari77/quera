import React, { Component } from 'react';

const Logout = () => {
    localStorage.removeItem("user_key")
    window.location = "/"

}
 
export default Logout;
