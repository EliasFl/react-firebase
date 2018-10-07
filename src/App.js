import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={Home} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route exact path="/" render={() => (
          <Redirect to="/home" />
        )} />
      </div>
    );
  }
}

export default App;