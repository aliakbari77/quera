import React, { Component } from 'react';

class TableHeader extends Component {
    state = {  } 
    render() {
        const {headers} = this.props 
        return (
                <thead>
                    <tr>
                    {headers.map((header, index) => <th key={index}>{header}</th>)}
                    </tr>
                </thead>
        );
    }
}
 
export default TableHeader;