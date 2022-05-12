import React, { Component } from 'react';

class FormSelect extends Component {
    state = {  } 
    render() { 
        return (
            <select className="custom-select" style={{width: "100%", padding: "12px"}} defaultValue={"Easiest"}>
                <option >Newest</option>
                <option value="1">Easiest</option>
                <option value="2">Hardest</option>
                <option value="3">Oldest</option>
            </select>
         
        );
    }
}
 
export default FormSelect;