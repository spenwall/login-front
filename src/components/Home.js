import React, { Component } from "react";

const MyContext = React.createContext();

class Home extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Logged In {context.state.loggedIn}</p>
              <p>Permissions {context.state.loggedIn}</p>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Home;
