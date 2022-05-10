import React, { Component } from 'react';
import axios from 'axios'
import TableHeader from './tableHeader';
import TableBody from './tableBody';

class Table extends Component {
    state = { 
        headers: ["id", "name", "Event/Ui", "Number of Solved", "tags", ""],
        questions: []
     } 

    render() { 
        return (
            <table className="table" style={{background: "#fff", margin: "12px 0", borderRadius: "10px", padding: "12px"}}>
                <TableHeader columns={this.props.columns}/>
                <TableBody data={this.props.data} columns={this.props.columns}/>
            </table>
        );
    }
}
 
export default Table;