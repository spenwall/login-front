import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Admin from './components/Admin';
import Error from './components/Admin';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const PermissionsContext = React.createContext();

class PermissionsProvider extends Component {
  state = {
    loggedIn: false,
    admin: false
  }
  render() {
    return (
      <PermissionsContext.provider value={{
        state: this.state
      }}>
       {this.props.children}
      </PermissionsContext.provider>
    )
  }
}

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
    ? <Component {...props} />
    : <Redirect to='/login' />
  )}/>
)

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    loggedIn === false ? <Component {...props} /> : <Redirect to='/' />
  )}/>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        <BrowserRouter>
          <div className="Content">
            <PermissionsProvider>
              <Navigation />
              <Switch>
                <Route path="/" component={Home} exact />
                <LoginRoute path="/login" component={Login} />
                <AdminRoute path="/admin" component={Admin} />
                <Route component={Error} />
              </Switch>
            </PermissionsProvider>
          </div>
        </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
