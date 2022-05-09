import React, { Component } from 'react';
import axios from 'axios'
import QuestionsTable from './questionsTable';

class Questions extends Component {
    state = { 
        questions: []
     }
    
    async componentDidMount() {
        const {data: questions} = await axios.get("http://127.0.0.1:9000/questions/") 
        this.setState({questions})
    }
    
    render() { 
        const {questions} = this.state
        console.log(questions)
        return (
            <QuestionsTable
                questions = {questions}
            />
        );
    }
}
 
export default Questions;gi