import React, { Component } from 'react';
import axios from 'axios'
import TableHeader from './tableHeader';
import TableBody from './tableBody';

class Table extends Component {
    state = { 
        headers: ["id", "name", "Event/Ui", "Number of Solved", "tags", ""],
        questions: []
     } 

    async componentDidMount(){
        const {data: questions} = await axios.get("http://127.0.0.1:9000/questions/")
        this.setState({questions})
    }
    render() { 
        return (
            <table class="table" style={{background: "#fff", margin: "12px 0", borderRadius: "10px", padding: "12px"}}>
                <TableHeader columns={this.props.columns}/>
                <TableBody data={this.props.data}/>
            </table>
        );
    }
}
 
export default Table;