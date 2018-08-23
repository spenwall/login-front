import React, { Component } from "react";
import { AuthConsumer } from "./AuthContext";

class Admin extends Component {
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
