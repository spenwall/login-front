import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Admin from './components/Admin';
import Error from './components/Admin';
import Navigation from './components/Navigation';
import Auth from './auth/auth';
import Logout from './components/Logout';
import UserProvider from './components/UserProvider';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const myAuth = new Auth();

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    myAuth.isAuthenticated()
    ? <Component {...props} />
    : <Redirect to='/login' />
  )}/>
)

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    myAuth.loggedIn()
    ? <Redirect to='/' />
    : <Component {...props} /> 
  )}/>
)

class App extends Component {
  state = {
    loggedIn: false,
    user: {}
  }

  render() {
    return (
      <UserProvider>
        <BrowserRouter>
          <div className="Content">
              <Navigation />
              <div className="column">
                <div className="box column is-half is-offset-one-quarter">
                  <Switch>
                      <Route path="/" component={Home} exact />
                      <LoginRoute path="/login" component={Login} />
                      <Route path="/logout" component={Logout} />
                      <AdminRoute path="/admin" component={Admin} />
                      <Route component={Error} />
                  </Switch>
                </div>
              </div>
          </div>
        </BrowserRouter>
        </UserProvider>
    );
  }
}

export default App;
