import React, { Component } from 'react';
import Login from "./login";
import Matterhorn from "../images/Matterhorn.jpg"

export default class Auth extends Component {
    render() {
      return (
        <div className="auth-page-content">

          <div className="left-side">
            <Login />
          </div>

          <div
            className="right-side"
            style={{
              backgroundImage: `url(${Matterhorn})`
            }}
          />
  
          
        </div>
      );
    }
  }