import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import fire from './config/fire';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './components/Logout';

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.lookForAuthenticatedUser();
  }

  lookForAuthenticatedUser = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  };

  render() {
    return (
      <div>
        <PrivateRoute path="/home" component={Home} user={this.state.user}/>

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />

        <Route exact path="/" render={() => (
          <Redirect to="/home" />
        )} />
      </div>
    );
  }
}

export default App;