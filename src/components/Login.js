import React, { Component } from "react";
import { auth } from '../actions/login';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

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
      user: false,
      admin: false,
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    auth(this.state).then(
      (response) => {
        console.log(response.data);
        response.data.admin === '1' ? this.setState({ admin: true }) : this.setState({ user: true });
      },
      (error) => this.setState({ errors: error, isLoading: false }) 
    )
  }

  render() {

    const { admin, user } = this.state;

    if (admin) {
      return <Redirect to='/admin' />;
    }

    if (user) {
      return <Redirect to='/' />;
    }

    return (
      <div className="column">
        <div className="box column is-half is-offset-one-quarter">
          <div className="card">
            <FormStyle onSubmit={this.onSubmit}>
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
        </div>
      </div>
    );
  }
}

export default Login;
