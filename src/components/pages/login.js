import React, { Component } from "react";
import axios from "axios";


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            data: [],
            errorText: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

  handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
          errorText: ""
        });
      }
    
  handleSubmit(event) {
    event.preventDefault();
  
      axios.post("https://seh-api.herokuapp.com/login", {
        username: this.state.username,
        password: this.state.password
        
    }, { withCredentials: false })

    .then(result => {
      // console.log(result)
      if (result.data === "correct credentials" ) {
        
        this.props.handleSuccessfulAuth();
      } else {
        this.setState({
          errorText: "Wrong username or password"
        });
        this.props.handleUnsuccessfulAuth();

      }
    })
    .catch(error => {
      this.setState({
        errorText: "An error occurred"
      });
      console.log("not sucessful auth", error)
      this.props.handleUnsuccessfulAuth();
    });
  }

  render() {
    return (
      <div>

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
             <div>{this.state.errorText}</div>
             
             <div className="auth-login-btn">
                 <button type="submit">Login</button>
             </div> 
            
        </form>
      </div>
    );
  }
}