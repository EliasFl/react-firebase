import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import fire from '../config/fire';

class Logout extends Component {
  constructor(props) {
    super(props);
    fire.auth().signOut();
  }

  render() {
    return (
      <Redirect to="/login" />
    );
  }
}

export default Logout;