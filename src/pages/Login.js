import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/fire';

import { Redirect } from 'react-router-dom'; 

class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticated: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.type]: event.target.value,
    });
  };

  login = (event) => {
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((u)=>{
      this.setState({ isAuthenticated: true });
    })
    .catch((error) => {
        console.log(error);
    });
  }

  render() {
    if (this.state.isAuthenticated) {
      return (
        <Redirect to="/home" />
      );
    }

    return (
      <div className="col-md-6">
        <h1>Login page</h1>
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input onChange={this.handleChange} type="email" id="inputEmail" className="form-control" placeholder="Enter email" value={this.state.email} />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input onChange={this.handleChange} type="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password} />
          </div>
          <button onClick={this.login} type="submit" className="btn btn-primary">Login</button>
          <Link to="/register">Need an account? Click to register</Link>
        </form>
      </div>
    );
  }
}

export default Login;