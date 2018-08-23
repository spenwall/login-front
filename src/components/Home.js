import React, { Component } from "react";
import { AuthConsumer } from './AuthContext';

class Home extends Component {
  render() {
    return (
      <div>
        <AuthConsumer>
          {context => 
          <div onClick={context.state.login} >{
                context.state.loggedIn ? 'You are Logged In' : 'You are not Logged In'
              }
          </div>}
        </AuthConsumer>
      </div>
    );
  }
}

export default Home;
