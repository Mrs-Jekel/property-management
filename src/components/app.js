
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Auth from "./pages/auth";
import Contact from "./pages/contact";
import AvailableProperties from "./pages/available-properties";
import CommunityEvents from "./pages/community-events";
import NoMatch from "./pages/no-match"


export default class App extends Component {
  render() {
    
      return (
        
          <div className="app">
              <h1>Hess Property Management</h1>
              <Home />
                <div className="home-container">
                    <Router>
                        <div>
                            <NavigationContainer />   
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/about-us" component={About} />
                                <Route path="/available-properties" component={AvailableProperties} />
                                <Route path="/community-events" component={CommunityEvents} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/auth" component={Auth} />

                                <Route component={NoMatch} />
                            </Switch>
                        </div>
                    </Router>
                </div>

          </div>
      )
  }
}

