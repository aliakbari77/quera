import React, { Component } from 'react';
import  {NavLink}  from 'react-router-dom';
import jwtDecode from 'jwt-decode'

class Navbar extends Component {
    state = { 
        user: {}
     }
    
    componentDidMount() {
        const jwt = localStorage.getItem("user_key") ? localStorage.getItem("user_key") : null
        if (jwt != null){
            const user = jwtDecode(jwt)
            console.log(user);
            this.setState({user})
        }

    }

    render() {
        const {user} = this.state
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
                        {!user.name &&
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Register</NavLink>
                                </li>
                            </React.Fragment>
                        }
                        {user.name &&
                            <React.Fragment>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/logout">Logout</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">{user.name}</NavLink>
                            </li>
                        </React.Fragment>
                        }
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;