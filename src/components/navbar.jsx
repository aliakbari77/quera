import React, { Component } from 'react';
import  {NavLink}  from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light " style={{background: "#fff"}} >
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="container" >

                <NavLink className="navbar-brand" to="/">
                    <h3 style={{color: "#0099cc"}}>Quera</h3>
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/edusys">Educational system</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/college">College</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/exercises">Exercises</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/events">Events</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;