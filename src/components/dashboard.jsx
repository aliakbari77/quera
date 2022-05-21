import React, { Component } from 'react';
import jwtDecode from 'jwt-decode'

class Dashboard extends Component {
    state = { 
        user: {}
     } 

    componentDidMount() {
        const jwt = localStorage.getItem("user_key")
        if (jwt){
            const user = jwtDecode(jwt)
            this.setState({user})
        }
    }
    render() {
        const {user} = this.state
        if (user.name == undefined) return <h3>Please login.</h3>
        return (
            <div>
                {user &&
                    <div style={{backgroundColor: "#fff", margin: "24px", padding: "24px", borderRadius: "10px", boxShadow: "0px 0px 8px 0px black", width: "25%"}}>
                        <h3>{user.name}</h3>
                        <h5>{user.email}</h5>
                    </div>
                }

            </div>
        );
    }
}
 
export default Dashboard;