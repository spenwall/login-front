import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Admin from './components/Admin';
import Error from './components/Admin';
import Navigation from './components/Navigation';
import Logout from './components/Logout';
import { AuthProvider, AuthConsumer } from './components/AuthContext';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    { context => (
      <Route {...rest} render={(props) => (
        context.state.loggedIn()
        ? <Component {...props} />
        : <Redirect to='/login' />
      )}/>
    )}
  </AuthConsumer>
)

const LoginRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    { context => (
      <Route {...rest} render={(props) => (
        context.state.loggedIn()
        ? <Redirect to='/' />
        : <Component {...props} /> 
      )}/>
    )}
  </AuthConsumer>
)

class App extends Component {
  render() {
    return (
      <AuthProvider>
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
        </AuthProvider>
    );
  }
}

export default App;
