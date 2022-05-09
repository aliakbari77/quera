import React, { Component } from 'react';

class TableBody extends Component {
    state = {  } 
    render() {
        const {questions} = this.props
        return (
            <tbody>
                {questions.map((question, index) => 
                    <tr>
                        <td>{question.id}</td>
                        <td>{question.title}</td>
                        <td><span style={{background: "#0099cc", padding: "2px", borderRadius: "5px", margin: "1.5px", color: "#fff"}}>{question.source}</span></td>
                        <td><span><b>{question.success_solved}</b> of </span>{question.total_solved}</td>
                        <td><span style={{background: "#9ca8b7", padding: "2px", borderRadius: "5px", margin: "1.5px"}}>{question.tags}</span></td>
                        <td><i class="fa fa-bookmark-o" aria-hidden="true" style={{fontSize: "20px"}}></i></td>
                    </tr>
                )}
                </tbody>
        );
    }
}
 
export default TableBody;