import React, { Component } from "react";
import { login } from '../actions/login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false,
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    login(this.state).then(
      (result) => {console.log('started from the bottom now I\'m here')},
      (error) => this.setState({ errors: error.response.data.errors, isLoading: false })
    )
  }


  render() {
    return (
      <div className="column">
        <div className="box column is-half is-offset-one-quarter">
          <div className="card">
            <form onSubmit={this.onSubmit}>
              <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input { errors ? 'is-danger : 'is-success'}" 
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
            </form>  
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
