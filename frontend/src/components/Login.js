import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import axios from 'axios';
import Auth from '../auth/AuthService';
import { Panel, Form, FormGroup, FormControl, Button, Col, ControlLabel, Checkbox } from 'react-bootstrap';


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      token: null,
      message: null,
      email:null
    };
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    let u = this.state.email;
    let p =  this.state.password;
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
      <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>
      </Form>
    )
  }

}




 
  