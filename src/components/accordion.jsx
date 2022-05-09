import React, { Component } from 'react';

class Accordion extends Component {
    state = { 
        
     } 
    render() { 
        const {filter} = this.props
        return (
        <div className="filter-box mt-4">
            <div>
                <div className="accordion" id={filter}>
                    <div className="card">
                        <div className="card-header" id={filter}>
                            <h2 className="mb-0">
                            <button
                            id={filter}
                            className="btn"
                            type="button"
                            data-toggle="collapse"
                            data-target={filter}
                            aria-expanded="true"
                            aria-controls={filter}
                            >
                            {filter}
                            </button>
                            </h2>
                        </div>
                        <div
                        id={filter}
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent={filter}
                        >
                            <div className="card-body">
                                <div >
                                    <input  type="checkbox" />
                                    <label className="form-check-label p-2" >
                                    item 1
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default Accordion;