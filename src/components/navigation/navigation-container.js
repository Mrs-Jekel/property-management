  
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Auth from "../pages/auth";
export default class NavigationContainer extends Component {
  constructor() {
    super();
  }



  render() {
      return (
          <div className="navbar">
            <div className="center-bar">
                <div className="nav-links">
                  <NavLink exact to="/">Home</NavLink>
                </div>                  

                <div className="nav-links">
                  <NavLink to="/about-us" activeClassName="nav-links-active">About Us</NavLink>
                </div>  

                <div className="nav-links">
                  <NavLink to="/contact" activeClassName="nav-links-active">Contact</NavLink>
                </div>  

                <div className="nav-links">
                  <NavLink to="/community-events" activeClassName="nav-links-active">Community Events</NavLink>
                </div>  

                <div className="nav-links">
                  <NavLink to="/available-properties" activeClassName="nav-links-active">Availabe Properties</NavLink>
                </div>  

                <div className="nav-links">
                  <NavLink to="/auth" onClick={Auth} activeClassName="nav-links-active">Auth</NavLink>
                </div>  

                {true ? <div className="nav-links"> 
                  <NavLink to="/payments">Payments</NavLink>
                </div> : null}

                {true ? <div className="nav-links"> 
                  <NavLink to="/documents">Documents</NavLink>
                </div> : null}
                
                {true ? <div className="nav-links"> 
                  <NavLink to="/accounting">Accounting</NavLink>
                </div> : null}
              
            </div>
        </div>
      )
  }
}