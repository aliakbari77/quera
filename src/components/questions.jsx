import axios from 'axios';
import React, { Component } from 'react';

class Questions extends Component {
    state = { 
        questions: []
     } 

    async componentDidMount() {
        console.log("Questoins page");
        const {data: questions} = await axios.get("http://127.0.0.1:9000/questions/")
        this.setState({questions})
    }

    render() { 
        return (
            <h1>Questions</h1>
        );
    }
}
 
export default Questions
;