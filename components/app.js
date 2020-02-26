import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Aboutus from "./pages/about";
import Auth from "./pages/auth";
import Payments from "./Payments/payments";
import Documents from "./pages/documents";
import Contact from "./pages/contact";
import AvailableProperties from "./carousel/available-properties";
import CommunityEvents from "./pages/community-events";
import NoMatch from "./pages/no-match"


library.add(faEnvelope, faMobileAlt);

export default class App extends Component {

    constructor(props) {
        super(props);
      

        this.state = {
          loggedInStatus: "NOT_LOGGED_IN"
        };
    
        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
      }
    
      handleSuccessfulLogin() {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
      }
    
      handleUnsuccessfulLogin() {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        });
      }
    
      authorizedPages() {
        return [
        <Route key="payements"path="/payments" component={Payments} />,
        <Route key="documents"path="/documents" component={Documents} />];
      }
  
  render() {
    
      return (
        
          <div className="app">
              <h1>Hess Property Management</h1>
                <Router>
                    <div>
                        <NavigationContainer 
                        loggedInStatus={this.state.loggedInStatus} />

                        <h2>{this.state.loggedInStatus}</h2>
                        

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about-us" component={Aboutus} />
                            <Route path="/available-properties" component={AvailableProperties} />
                            <Route path="/community-events" component={CommunityEvents} />
                            <Route path="/contact" component={Contact} />
                            <Route
                              path="/auth"
                              render={props => (
                                <Auth
                                  {...props}
                                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                                />
                              )}
                            />
                            {this.state.loggedInStatus === "LOGGED_IN" ? (
                              this.authorizedPages()
                            ) : null}

                          <Route component={NoMatch} />
                      </Switch>
                  </div>
              </Router>
        </div>
    )
  }
}

