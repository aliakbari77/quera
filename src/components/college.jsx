import React, { Component } from 'react';
import axios from "axios"

class College extends Component {
    state = { 
        college: {}
     }

    async componentDidMount() {
        const {data: college} = await axios.get(`http://127.0.0.1:9000/colleges/${this.props.match.params.id}`)
        console.log(college);
        this.setState({college})
    }
    render() {
        const {college} = this.state
        return (
           <div className='row' style={{marginTop: "48px"}}>
               <div className="col" style={{background: "#fff", padding: "16px"}}>
               <h1>{college.title}</h1>
               <hr />
               <p>{college.desc}</p>
               </div>
           </div>
        );
    }
}
 
export default College;