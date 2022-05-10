import React, { Component } from 'react';
import _ from 'lodash'

class TableBody extends Component {
    state = {  } 

    renderCell = (item, column) => {
        if (column.content) return column.content(item);
        
        if (column.path == "tags")
            return item.tags.map(i => <span style={{background: "#9ca8b7", padding: "2px", borderRadius: "5px", margin: "1.5px"}}>{i}</span>)
        
        if (column.path == "source")
            return <span style={{background: "#0099cc", padding: "2px", borderRadius: "5px", margin: "1.5px", color: "#fff"}}>{_.get(item, column.path)}</span>
        
        if (column.path == "success_solved")
            return <span><b>{_.get(item, column.path)}</b> of {_.get(item, "total_solved")}</span>

        return _.get(item, column.path);
      };
      
    render() {
        const {data, columns} = this.props
        return (
            <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column, index) => (
              <td key={item.index}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
        );
    }
}
 
export default TableBody;