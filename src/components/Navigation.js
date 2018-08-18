import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navbar is-link">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
          <div className="navbar-menu">
            <div className="navbar-start">  
              <NavLink className="navbar-item" to="/">Home</NavLink>
            </div>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <NavLink className="button is-info" to='/Login'>
                  <span className="icon"><i className="fas fa-sign-in-alt"></i></span> <span>
                  Login
                  </span>
                  </NavLink>
                </p> 
                <p className="control">
                  <NavLink className="button is-info" to='/Logout'>
                  <span className="icon"><i className="fas fa-sign-in-alt"></i></span> <span>
                  Logout
                  </span>
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
