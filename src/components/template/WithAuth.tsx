import React, { Component } from 'react';
import {
  isLoggedIn,
  extractUserFromAccessToken,
} from '../../connector/auth/auth';

// TODO: this is a temporary work around for the currentUser persistance will need to resolve this properly later
const WithAuth = function (AuthComponent) {
  return class AuthWrapper extends Component<Component, any> {
    state = {
      currentUser: null,
    };
    componentDidMount() {
      if (!isLoggedIn()) {
        window.location.href = '/';
      } else {
        try {
          const user = extractUserFromAccessToken();
          this.setState({ currentUser: user });
        } catch (err) {
          console.log('logged out and redirecting...', err);
          window.location.href = '/';
        }
      }
    }

    render() {
      if (this.state.currentUser) {
        return <AuthComponent currentUser={this.state.currentUser} />;
      } else {
        return null;
      }
    }
  };
};

export default WithAuth;
