import React, { Component } from 'react';
import axios from 'axios'
import {Link}  from 'react-router-dom';

class College extends Component {
    state = { 
        colleges: []
     }

    async componentDidMount() {
        const {data: colleges }= await axios.get("http://127.0.0.1:9000/colleges/")
        console.log(colleges)
        this.setState({colleges})
    }

    render() {
        const {colleges} = this.state 
        return (
            <div>
                <div className="row" style={{marginTop: "48px"}}>
                    {colleges.map(college => 
                        <div className="col-3">
                            <div className="card" style={{width: "100%", maxHeight: "30rem", height: "15rem", padding: "12px"}}>
                                <div className="card-body">
                                    <h5 className="card-title">{college.title}</h5>
                                    <p className="card-text">{college.desc}</p>
                                    <Link to={`/colleges/${college.id}`} className="btn btn-primary">Watch Course</Link>
                                </div>
                            </div>
                        </div>
                        )}
                    
                    
                </div>
            </div>
        );
    }
}
 
export default College;