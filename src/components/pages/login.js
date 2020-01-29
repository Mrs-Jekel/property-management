import React, { Component } from "react";
import axios from "axios";



export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

handleSubmit(event) {
    axios.post("/AuthenticateUser",
    {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    }, {withCredentials: true }
    ).then(response => {
      console.log("handleSubmit", response)
    })
  event.preventDefault();
  }

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}
  render() {
    return (
      <div>
        <h1>LOGIN</h1>

        <h2>{this.state.username}</h2>
        <h2>{this.state.password}</h2>

        <form onSubmit={this.handleSubmit}>
          <input 
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
             />

            <input 
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
             />

             <div>
                 <button type="submit">Login</button>
             </div>
        </form>
      </div>
    );
  }
}