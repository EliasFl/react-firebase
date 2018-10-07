import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/fire';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  state = {
    email: '',
    password: '',
    shouldRedirect: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.type]: event.target.value,
    });
  };

  register = (event) => {
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((u)=>{
      this.setState({ shouldRedirect: true });
    })
    .catch((error) => {
        console.log(error);
      })
  };

  render() {
    if (this.state.shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div className="col-md-6">
        <h1>Register page</h1>
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input onChange={this.handleChange} type="email" className="form-control" id="inputEmail" placeholder="Enter email" value={this.state.email} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} />
          </div>
          <button onClick={this.register} type="submit" className="btn btn-primary">Register</button>
          <Link to="/login">Have an accoutn? Click to login</Link>
        </form>
      </div>
    );
  }
}

export default Register;