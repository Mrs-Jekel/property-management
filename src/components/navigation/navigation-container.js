  
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Auth from "../pages/auth";
import Payments from "../Payments/payments";


const NavigationContainer = props => {

  const dynamicLink = (route, linkText) => {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <div className="center-bar">

            <div className="nav-links">
              <NavLink to="/documents" activeClassName="nav-link-active">
                Documents
              </NavLink>
            </div>

            <div className="nav-links">
              <NavLink to="/payments" activeClassName="nav-link-active">
                Payments
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="navbar-container">
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
              <NavLink to="/auth" onClick={Auth} activeClassName="nav-links-active">Login</NavLink>
            </div>  

            {props.loggedInStatus === "LOGGED_IN" ? (
              dynamicLink("/documents", "Documents"),
              dynamicLink("/payemnts", "Payments")
              ) : null}
  
          </div>
        </div>
            
      </div>
      );
  };

export default NavigationContainer;