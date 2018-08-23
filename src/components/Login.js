import React, { Component } from "react";
import Auth from '../auth/auth';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

const FormStyle = styled.form`
  padding: 20px
`

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false,
      loggedIn: false
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = login => e => {
    e.preventDefault();
    const myAuth = new Auth();
    const loginResult = myAuth.login(this.state);
    loginResult.then(
      success => {
        console.log('onSubmit success', success);
        this.setState( { loggedIn: true });
        login();
      },
      err =>  {
        console.log('onSubmit error', err)

      }
    );
  }

  render() {

    const { loggedIn } = this.state;

    const redirect = <Redirect to="/" />

    const loginForm = 
    <AuthConsumer>
    { context => (
    <div className="card">
      <FormStyle onSubmit={this.onSubmit(context.state.login )}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success"
                    type="text" 
                    placeholder="username"
                    name="username"
                    onChange={this.onChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-success"
                    type="password" 
                    placeholder="password"
                    name="password"
                    onChange={this.onChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" disabled={this.isLoading}>Login</button>
            </div>
          </div>
      </FormStyle>  
    </div>
    )}
    </AuthConsumer>

    return (
      <AuthConsumer>
          { context => (
              context.state.loggedIn ? loginForm : redirect
          )}
      </AuthConsumer>
    );
  }
}

export default Login;
