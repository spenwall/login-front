import React, { Component } from 'react';

class Users extends Component {
    
    render() {
        const userCards = this.props.users.map(user => {
            return (
              <div key={user.id}>
                <div className="card userCard">
                  <div className="card-header">
                    <div className="card-header-title userTitle">
                      <div className="user">
                        <img
                          className="userImage"
                          src={user.profile}
                          width="40"
                          height="40"
                          alt="profile"
                        />
                        <div className="userName">{user.name}</div>
                      </div>
                      <div>
                        <button className="button is-link">Update</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="userEmail">
                      <strong>Email:</strong> {user.email}
                    </div>
                    <div className="userRole">
                      <strong>Role:</strong> {user.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          });

        return (
            userCards
        );
    }
}

export default Users