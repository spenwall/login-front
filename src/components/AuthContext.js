import React, { Component } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: this.loggedIn,
      user: {},
      spencer: 'spencer',
      login: this.login,
      logout: this.logout,
      isAdmin: this.isAdmin,
    };

  }

  loggedIn = () => {
    const accessToken = localStorage.getItem('access_token');
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
        console.log('success in auth request');
        localStorage.setItem('access_token', response.data.access_token);
        const header = {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + response.data.access_token
        }
        return axios.get('http://192.168.10.20/api/user', {headers: header}).then(
          (userResponse) => {
            console.log('success in user request');
            console.log('spencer? ', this.state.spencer);
            this.setState({ user: userResponse.data, spencer: 'actually Steve' });
            console.log('user', this.state.user);
            return userResponse
          }
        )
      }
    )
  }

  loadUser = () => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken !== null) {
      const header = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
      return axios.get('http://192.168.10.20/api/user', {headers: header}).then(
        (userResponse) => {
          this.setState({ user: userResponse.data });
        }
      )
    }
  }

  logout = () => {
    localStorage.removeItem('access_token');
    this.setState({ user: {} });
  }

  isAdmin = () => {
    if ( Object.keys(this.state.user).length === 0) {
      this.loadUser();
    }
    return this.state.user.admin === '1';
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