import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedOut: false
    }

  }

  render() {
    return (
      <AuthConsumer>
        { (context) => (
          context.state.loggedIn()
          ? context.state.logout()
          : <Redirect to="/login" />
        )}
      </AuthConsumer>
    );
  }
}

export default Logout;
