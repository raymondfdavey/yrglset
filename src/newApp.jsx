import React, { Component } from "react";
import Header from "./components/Header";

import { Router } from "@reach/router";
import NewUser from "./components/NewUser";
import NewHome from "./NewHome";

class newApp extends Component {
  state = { login: false, year: "" };
  render() {
    return (
      <div className="page">
        <Header login={this.state.login} toggleLogin={this.toggleLogin} />
        {this.state.login && <LoginBox />}
        <Router>
          <NewHome path="/" />
          <NewUser path="newUser" />
        </Router>
      </div>
    );
  }
  toggleLogin = () => {
    this.setState((currentState) => {
      return {
        login: !currentState.login,
      };
    });
  };
}

export default newApp;
