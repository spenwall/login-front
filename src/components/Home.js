import React, { Component } from "react";
import { AuthConsumer } from './AuthContext';

class Home extends Component {
  render() {
    return (
      <div>
        <AuthConsumer>
          {context => 
          <div>
            <div>
              {
                context.state.loggedIn() ? 'You are Logged In' : 'You are not Logged In'
              }
            </div>
            <button className="btn btn-blue">Test</button>
          </div>
          }
        </AuthConsumer>
      </div>
    );
  }
}

export default Home;
