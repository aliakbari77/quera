import React, { Component } from 'react';

class FormInput extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <input type="text" class="form-control" placeholder="Search name or number of question . . ." aria-label="Username" aria-describedby="basic-addon1" style={{padding: "12px"}}></input>
            </div>
        );
    }
}
 
export default FormInput;