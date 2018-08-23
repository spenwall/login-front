import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.login = () => {
      console.log('context logged in');
      this.setState({ loggedIn: true });
    }

    this.state = {
      loggedIn: false,
      login: this.login,
      logout: this.logout,
    };

  }

  logout = () => {
    console.log('context logout');
    this.setState({ loggedIn: false });
  }

  
  render() {
    return (
      <AuthContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer };