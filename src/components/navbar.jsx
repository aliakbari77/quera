import React, { Component } from 'react';
import  {NavLink}  from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light " style={{background: "#fff"}} >
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
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;