import React, { Component } from "react";
import AppContext from './Context';

class Home extends Component {
  render() {
    return (
      <div>
        <AppContext.Consumer>
          {data => 
          <div onClick={data.state.toggleLogin} >{
                data.state.loggedIn ? 'You are Logged In' : 'You are not Logged In'
              }
          </div>}
        </AppContext.Consumer>
      </div>
    );
  }
}

export default Home;
