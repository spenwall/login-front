import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navbar is-primary">
          <div className="navbar-menu">
            <div className="navbar-start">  
              <NavLink className="navbar-item" to="/">Home</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
