import React, { Component } from "react";
import "../styles/navbar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul className="navigation">
          <li className="navigation">
            <a href="" onClick={() => console.log("Sign Up Button Pressed")}>
              Sign Up
            </a>
          </li>
          <li className="navigation">
            <a href="" onClick={() => console.log("Log In Button Pressed")}>
              Log In
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavBar;
