import React, { Component } from 'react';
import AppContext from './Context';

class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.updateLogin = (loginState) => {
      this.setState({ loggedIn: loginState });
    };

    this.state = {
      loggedIn: false,
      updateLogin: this.updateLogin,
    };

  }
  
  render() {
    return (
      <AppContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default UserProvider;