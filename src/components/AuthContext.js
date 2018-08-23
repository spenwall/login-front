import React, { Component } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: this.loggedIn,
      login: this.login,
      logout: this.logout,
    };

  }

  loggedIn = () => {
    var accessToken = localStorage.getItem('access_token');
    return accessToken !== null;
  }

  login = (data) => {
    const accessData = {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'fxBmSbHWwSAetStRnmKAgCIpPWGefttWOWOTi0UB',
      scope: '',
    }
    const requestData = Object.assign(data, accessData);
    return axios.post('http://192.168.10.20/oauth/token', requestData).then(
      (response) => { 
        localStorage.setItem('access_token', response.data.access_token);
        return response;
      },
    )
  }

  logout = () => {
    localStorage.removeItem('access_token');
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