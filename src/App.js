import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={Home} />

        <Route exact path="/" render={() => (
          <Redirect to="/home" />
        )} />
      </div>
    );
  }
}

export default App;