import React, { Component } from "react";
import { AuthConsumer } from './AuthContext';

class Home extends Component {
  render() {
    return (
      <div>
        <AuthConsumer>
          {data => 
          <div onClick={data.state.logIn} >{
                data.state.loggedIn ? 'You are Logged In' : 'You are not Logged In'
              }
          </div>}
        </AuthConsumer>
      </div>
    );
  }
}

export default Home;
