import React, { Component } from 'react';
import axios from 'axios';
import { passportAddress } from '../config';

class User extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: props.user.name,
        email: props.user.email,
        role: props.user.role,
        edit: false,
        loading: false,
      };
    }
    
    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    update = () => {
      this.setState({ edit: true })
    }

    cancel = () => {
      this.setState({ edit: false })
    }

    save = () => {
      this.setState({ loading: true })
      console.log('Started from the bottom');
      const accessToken = localStorage.getItem('access_token');
    if (accessToken !== null) {
      const header = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
      axios.put(passportAddress+'/api/user/' + this.props.user.id, 
                {name: this.state.name, role: this.state.role }, 
                {headers: header}
        ).then(() => {
          console.log('all done the request');
          this.setState({ loading: false, edit: false });
        }, () => {
          console.log('there was an error');
        })
      }
    }

    render() {
        return (
              <div className="card userCard">
                <div className="card-header">
                  <div className="card-header-title userTitle">
                    <div className="user">
                      <img
                        className="userImage"
                        src={this.props.user.profile}
                        width="40"
                        height="40"
                        alt="profile"
                      />
                      {this.state.edit 
                        ? <input type="text" name="name" id="name" value={this.state.name} onChange={this.onChange}/>
                        : <div className="userName">{this.state.name}</div>
                      }
                    </div>
                    <div>
                      {this.state.edit
                        ? <div>
                            <button className={`button is-info mr-2 ${this.state.loading ? "is-loading" : ""}`} onClick={this.save}>Save</button>
                            <button className="button is-warning"  onClick={this.cancel}>Cancel</button>
                          </div>
                        : <button className="button is-link" onClick={this.update} >Update</button>
                      }
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="userEmail">
                    <strong>Email:</strong> {this.props.user.email}
                  </div>
                  
                    {this.state.edit
                      ? <select name="role" id="role" value={this.state.role} onChange={this.onChange}>
                          <option value="admin">admin</option> 
                          <option value="user">user</option>
                        </select>
                      : <div className="userRole"><strong>Role:</strong> {this.state.role}</div>
                    }
                </div>
              </div>
        );
    }
}

export default User