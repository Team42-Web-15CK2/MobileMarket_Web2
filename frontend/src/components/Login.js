import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import axios from 'axios';
import Auth from '../auth/AuthService';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class Login extends Component {

  constructor() {
    super()
    this.state = {
      user: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
      });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this);
    // let u = this.state.email;
    // let p =  this.state.password;
    axios.post('/api/user/login', {
      username: u,
      password: p
    })
    .then(response => {
      console.log(response);
      return false;
    })
  }

  render() {
    return (
      <div className="login jumbotron center-block">
      <h1>Login</h1>
      <form role="form">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" valueLink={this.linkState('user')} className="form-control" id="username" placeholder="Username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
    </form>
  </div>
    )
  }

}

 
  