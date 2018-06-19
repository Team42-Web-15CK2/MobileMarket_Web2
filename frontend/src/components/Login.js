import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import axios from 'axios';
import {Form, FormGroup, Col, Checkbox, Button, ControlLabel, FormControl} from 'react-bootstrap';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: '',
      token: null,
      message: null,
      email:''
    };
    this.onChange = this.onChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  onChange (key, value) {
    this.setState({ [key]: value })
  }


  handleFormSubmit(e) {
    e.preventDefault();
    axios.post('/auth/login?email='+ this.state.email +'&password='+this.state.password)
    .then(response => {
      location.reload();
      return;
    })
    .catch(function (error) {
      new Noty({
        text: 'Information is not correct',
        type: 'error',
    }).show();
    });
  }

  render() {
    return (
      <div className="login">
             <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" onChange={e => this.state.email = e.target.value} defaultValue={this.state.email}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" onChange={e => this.state.password = e.target.value} defaultValue={this.state.password}/>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" onClick={this.handleFormSubmit}>Sign in</Button>
                </Col>
              </FormGroup>
            </Form>
      </div>
    )
  }

}




 
  