import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Auth from '../auth/auth';
import { AuthConsumer } from './AuthContext';

class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedOut: false
    }

  }

  logout = (logout) => {
    logout();
    const myAuth = new Auth();
    myAuth.logout();
    this.setState({ loggedOut: true });
  }

  render() {
    return (
      <AuthConsumer>
        { (context) => (
          this.loggedOut
          ? <Redirect to="/login" />
          : <div onload={this.logout(context.state.logout)}></div>
        )}
      </AuthConsumer>
    );
  }
}

export default Logout;
