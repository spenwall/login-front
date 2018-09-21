import React, { Component } from "react";
import { AuthConsumer } from "./AuthContext";
import axios from "axios";
import Pagination from "./Pagination";
import Users from "./Users";
import { passportAddress } from '../config';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      pages: {},
    };
  }

  componentDidMount() {
    
    this.getUsers();
    
  }

  getUsers = (address = passportAddress+"/api/users") => {
    const header = {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      Accept: "application/json"
    };

    axios.get(address, { headers: header }).then(
      response => {
        this.setState({
          pages: {
            first: response.data.links.first,
            last: response.data.links.last,
            next: response.data.links.next,
            prev: response.data.links.prev
          },
          users: response.data.data
        });
      },
      error => console.log(error)
    );
  }

  prev = () => {
    this.getUsers(this.state.pages.prev);
  }

  next = () => {
    this.getUsers(this.state.pages.next);
  }

  render() {
    const users = this.state.users
      ? (
        <div>
          <Users users={this.state.users}/>
          <Pagination 
            prevClick={this.prev} 
            nextClick={this.next} 
            prev={this.state.pages.prev}
            next={this.state.pages.next}
          /> 
        </div>
      )
      : "";
      

    return (
      <AuthConsumer>
        {context =>
          context.state.user.admin === "admin" 
          ? <div>You are NOT admin</div>
          : users
        }
      </AuthConsumer>
    );
  }
}

export default Admin;
