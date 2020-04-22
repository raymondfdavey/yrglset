import React from "react";
import { Link } from "@reach/router";

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <h1>YEARLY GOAL SETTER </h1>
      </Link>
      <h1>(</h1>
      <h1 className="yrglset">YRGLSET</h1>
      <h1>)</h1>

      <p className="login" onClick={() => props.toggleLogin()}>
        log in
      </p>
    </header>
  );
}

export default Header;
