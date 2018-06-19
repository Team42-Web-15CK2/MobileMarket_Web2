import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import axios from 'axios';
import {Form, FormGroup, Col, Checkbox, Button, ControlLabel, FormControl} from 'react-bootstrap';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name:'',
      address:'',
      phonenumber:''
    };
    this.onChange = this.onChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  onChange (key, value) {
    this.setState({ [key]: value })
  }


  handleFormSubmit(e) {
    e.preventDefault();
    axios.post('/auth/register?name='+ this.state.name+'&email='+this.state.email+
    '&password='+this.state.password+'&address='+this.state.address+'&phonenumber='+this.state.phonenumber)
    .then(response => {
      console.log(response); 
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
          <Form inline>
             <FormGroup controlId="formInlineName">
                <ControlLabel>Name</ControlLabel>{' '}
                <FormControl type="text" placeholder="name...." onChange={e => this.state.name = e.target.value} />
             </FormGroup>{' '}
             <br />
             <FormGroup controlId="formHorizontalEmail">
                <ControlLabel>email</ControlLabel>{' '}
                <FormControl type="text" placeholder="email...." onChange={e => this.state.email = e.target.value}/>
             </FormGroup>{' '}
             <br />
             <FormGroup controlId="formInlineName">
                <ControlLabel>password</ControlLabel>{' '}
                <FormControl type="text" placeholder="name...." onChange={e => this.state.password = e.target.value} />
             </FormGroup>{' '}
             <br />
             <FormGroup controlId="formInlineName">
                <ControlLabel>phonenumber</ControlLabel>{' '}
                <FormControl type="text" placeholder="phonenumber...." onChange={e => this.state.phonenumber = e.target.value}/>
             </FormGroup>{' '}
             <br />
             <FormGroup controlId="formInlineName">
                <ControlLabel>address</ControlLabel>{' '}
                <FormControl type="text" placeholder="address...." onChange={e => this.state.address = e.target.value}/>
             </FormGroup>{' '}     
              <br />
             <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" onClick={this.handleFormSubmit}>Sign up</Button>
                </Col>
              </FormGroup>
          </Form>    
      </div>
    )
  }

}




 
  