import React, { Component } from 'react';

class QuestionsTable extends Component {
    state = {  }

    columns = [
        {
          path: "id",
          label: "ID",
          content: (question) => (
            <Link to={`/questions/${question.id}`}>{question.title}</Link>
          ),
        },
        { path: "title", label: "Title"},
        { path: "source", label: "Event/Uni" },
        { path: "tags", label: "Number of Solved" },
        { key: "bookmark", content: () => <i class="fa fa-bookmark-o" aria-hidden="true" style={{fontSize: "20px"}}></i>}
      ];

    render() { 
        const {questions} = this.props

        return (
            <Table
                columns={this.columns}
                data={questions}
            />
        );
    }
}
 
export default QuestionsTable;