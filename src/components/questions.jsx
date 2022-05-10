import axios from 'axios';
import React, { Component } from 'react';
import QuestionsTable from './questionsTable'

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
            <QuestionsTable questions={this.state.questions}/>
        );
    }
}
 
export default Questions;