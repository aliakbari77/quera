import React, { Component } from 'react';

class Switch extends Component {
    state = {  } 
    render() { 
        return (
            <div className="custom-control custom-switch"  style={{background: "#fff", padding: "8px", borderRadius: "10px"}}>
                <input type="checkbox" className="custom-control-input" id="customSwitch1" style={{margin: "12px"}}/>
                <label className="custom-control-label" for="customSwitch1">Toggle this switch element</label>
            </div>
        );
    }
}
 
export default Switch;