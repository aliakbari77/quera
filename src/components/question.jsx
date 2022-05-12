import axios from 'axios';
import React, { Component } from 'react';


class Question extends Component {
    state = { 
        question: {}
     }
    async componentDidMount() {
        const id = this.props.match.params.id
        const {data: question} = await axios.get(`http://127.0.0.1:9000/questions/${id}`)
        this.setState({question})
        console.log(question);
    }
    render() { 
        const {question} = this.state
        return (
            <div>
                <div style={{background: "#fff",
                             margin: "16px",
                             padding: "16px",
                             borderRadius: "10px",
                             boxShadow: "3px 3px 6px gray"}}>
                    <header style={{textAlign: "center"}}>
                        <h3>{question.title}</h3>
                    </header>
                    <body>
                        <div>
                            <ul>
                                <li>time limit: {question.success_solved}</li>
                                <li>memory limit: {question.total_solved}</li>
                            </ul>
                                <hr/>
                        </div>
                        <div>
                            <h6>{question.desc}</h6>
                        </div>
                        <div>
                            <h6 className='text-divider'><span>upload file</span></h6>
                        </div>
                    </body>
                </div>
            </div>
        );
    }
}
 
export default Question;