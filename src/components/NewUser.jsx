import React, { Component } from "react";
import Header from "./Header";

class NewUser extends Component {
  state = { usernameValue: "", passwordValue: "", newUser: false };

  render() {
    return (
      <div className="newUserBox">
        <h1>register for yrglset below</h1>
        <form onSubmit={() => this.handleSubmit()}>
          <p>enter preffered username</p>
          <input
            type="text"
            value={this.state.usernameValue}
            onChange={this.handleUsernameChange}
          />
          <p>enter preferred password</p>
          <input
            type="text"
            value={this.state.passwordValue}
            onChange={this.handlePasswordChange}
          />
          <p>email (to be sent password) (optional)</p>
          <input
            type="text"
            value={this.state.passwordValue}
            onChange={this.handlePasswordChange}
          />
          <button>sign up!</button>
        </form>
      </div>
    );
  }
}

export default NewUser;
