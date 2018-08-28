import React, { Component } from "react";
import { AuthConsumer } from "./AuthContext";
import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users:  {}
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
    return (
      <AuthConsumer>
        { (context) => (
          context.state.user.admin === '1'
          ? <div>You are admin</div>
          : <div>You are NOT admin</div>
        )}
      </AuthConsumer>
    );
  }
}

export default Admin;
