import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Auth from '../auth/auth';
import { AuthConsumer } from './AuthContext';

class Logout extends Component {

  render() {
    console.log('logout render');
    const myAuth = new Auth();
    myAuth.logout();

    return (
      <div>
        <AuthConsumer>
          { context => (
            context.state.logout()
          )}
        </AuthConsumer>
      </div>
    );
  }
}

export default Logout;
