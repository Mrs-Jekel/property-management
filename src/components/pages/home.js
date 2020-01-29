import React, { Component } from 'react'
import house from "../images/house.jpg"

import About from "./about";
import AvaliableProperties from "./available-properties";
import CommunityEvents from "./community-events";
import Auth from "./auth";

export default class Home extends Component {
  constructor(props) {
      super(props)

      this.state = {
        pageTitle: "Hess Property Management",
        isLoadong: false      
      }
  } // State - Dynamic Data
 // LIfecycle hooks

  render() {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }
      return (
          <div>
              <img src={house}>

              </img>

          </div>
      )
  }
}