import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { AuthConsumer } from "./AuthContext";

class Navigation extends Component {

  render() {

    const loginButton = <p className="control">
                          <NavLink className="button is-info" to='/login'>
                            <span className="icon"><i className="fas fa-sign-in-alt"></i></span> <span>
                              Login
                            </span>
                          </NavLink>
                        </p>

    const logoutButton = <p className="control">
                            <NavLink className="button is-info" to='/logout'>
                              <span className="icon"><i className="fas fa-sign-in-alt"></i></span> <span>
                                Logout
                              </span>
                            </NavLink>
                          </p>


    return (
      <AuthConsumer>
                { (context) => (
      <div>
        <div className="navbar is-link">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </div>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
          <div className="navbar-menu">
            <div className="navbar-start">  
              <NavLink className="navbar-item" to="/">Home</NavLink>
              {context.state.isAdmin() 
                ? <NavLink className="navbar-item" to="/admin">Admin</NavLink>
                : ''
              }
            </div>
            <div className="navbar-item">
              <div className="field is-grouped">
                  {context.state.loggedIn() ? logoutButton : loginButton}
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      </AuthConsumer>
    );
  }
}

export default Navigation;
