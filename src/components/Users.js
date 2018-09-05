import React, { Component } from 'react';
import User from './User';

class Users extends Component {

    
    render() {
        const userCards = this.props.users.map(user => {
            return (
              <User user={user} key={user.id} />
            );
          });

        return (
            userCards
        );
    }
}

export default Users