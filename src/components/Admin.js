import React, { Component } from "react";
import { AuthConsumer } from "./AuthContext";
import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users:  [],
      first: '',
      next: '',
      last: '',
      prev: '',
    }

  }

  componentDidMount() {
    const header = {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
      'Accept': 'application/json'
    };

    axios.get('http://192.168.10.20/api/users', {headers: header})
      .then(
        response => {
          this.setState({
            users: response.data.data,
            first: response.data.links.first,
            last: response.data.links.last,
            next: response.data.links.next,
            prev: response.data.links.prev
          });
          console.log('first', this.state.first); 
        },
        error => console.log(error)
      )
  }

  render() {
    const users = this.state.users 
    ? this.state.users.map((user, i) => {
     return <div>
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">
                    {user.name}
                  </div>
                </div>
                <div className="card-content">
                  User information
                </div>
              </div>
            </div>
    }) 
    : '';

    return (
      <AuthConsumer>
        { (context) => (
          context.state.user.admin === '1'
          ? <div>You are NOT admin</div>
          : users
        )}
      </AuthConsumer>
    );
  }
}

export default Admin;
