import React, { Component } from "react";
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
      loggedIn: false,
      error: false,
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: false })
  }

  onSubmit = login => e => {
    e.preventDefault();
    const loginResult = login(this.state);
    loginResult.then(
      success => {
        this.setState({ loggedIn: true })
      },
      err =>  {
        this.setState({ errors: err, error: true })
      }
    );
  }

  render() {


    const redirect = <Redirect to="/" />

    const loginForm = 
    <AuthConsumer>
    { context => (
    <div className="card">
      <FormStyle onSubmit={this.onSubmit(context.state.login )}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input className={`input ${this.state.error ? "is-danger" : "is-success"}`}
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
            {this.state.error
            ? <p class="help is-danger">This email or password is invalid</p>
            : ''}
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input className={`input ${this.state.error ? "is-danger" : "is-success"}`}
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
              this.state.loggedIn ? redirect : loginForm
          )}
      </AuthConsumer>
    );
  }
}

export default Login;
