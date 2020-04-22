import React, { Component } from "react";
import { Link } from "@reach/router";

class LoginBox extends Component {
  state = { usernameValue: "", passwordValue: "", newUser: false };
  render() {
    return (
      <div className="loginBox">
        <form onSubmit={() => this.handleSubmit()}>
          <p>username</p>
          <input
            type="text"
            value={this.state.usernameValue}
            onChange={this.handleUsernameChange}
          />
          <p>password</p>
          <input
            type="text"
            value={this.state.passwordValue}
            onChange={this.handlePasswordChange}
          />
          <button>login</button>
          <Link to="/yrglset/newUser">
            <p className="newUser" onClick={() => this.props.toggleLogin()}>
              new user
            </p>
          </Link>
        </form>
      </div>
    );
  }
  toggleNewUser = () => {
    this.setState((currentState) => {
      return {
        newUser: !currentState.newUser,
      };
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log("YO");
  }
  handleUsernameChange = () => {};
  handlePasswordChange = () => {};
}

export default LoginBox;
