import React, { Component } from 'react';

class Accordion extends Component {
    state = { 
        
     } 
    render() { 
        return (
        <div className="filter-box mt-4">
            <div>
                <h5 className="card-title">Filter Box</h5>
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                            <button
                            id="btn-FILTER_NAME-collapse"
                            className="btn"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            >
                            filter
                            </button>
                            </h2>
                        </div>
                        <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
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