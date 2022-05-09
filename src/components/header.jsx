import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className='row' style={{marginTop: "36px", background: "#fff", paddingTop: "12px", borderRadius: "10px"}}>
                <div className="col-3"><h5 style={{margin: "0"}}>Excercises</h5></div>
                <div className="col">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="#" style={{paddingTop: "0"}}>Exercises</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#" style={{paddingTop: "0"}}>Top Player</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Header;