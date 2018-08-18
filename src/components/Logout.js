import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Auth from '../auth/auth';

class Logout extends Component {
  render() {
    console.log('logout render');
    const myAuth = new Auth();
    myAuth.logout();

    return (
      <Redirect to='/login' />
    );
  }
}

export default Logout;
