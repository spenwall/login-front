import React, { Component } from 'react';

export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    loggedIn: false,
    admin: false
  }
  render() {
    return (
      <UserContext.Provider value="I'm the Value">
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider;