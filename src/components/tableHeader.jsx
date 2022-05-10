import React, { Component } from 'react';

class TableHeader extends Component {
    state = {  } 
    render() {
        return (
                <thead>
                    <tr>
                        {this.props.columns.map((column, index) => <th key={index}>{column.label}</th>)}
                    </tr>
                </thead>
        );
    }
}
 
export default TableHeader;