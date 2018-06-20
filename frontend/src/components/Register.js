import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import axios from 'axios';
import {Form, FormGroup, Col, Checkbox, Button, h3, FormControl} from 'react-bootstrap';

export default class Register extends Component {

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

    var dataSend = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phonenumber: this.state.phonenumber,
      address: this.state.address
    }

    e.preventDefault();
    axios.post('/auth/register', dataSend)
    .then((response) => {
      console.log(response); 
    }).catch(error =>{console.log(error.message)
    // .catch(function (error) {
    //   new Noty({
    //     text: 'Information is not correct',
    //     type: 'error',
    // }).show();
    });
    alert("thanh cong")
  }

  render() {
    return (
      <div className="login">
          <Form inline >
             <FormGroup controlId="formInlineName">
                <h3>Name</h3>
                <input className="input"  type="text" placeholder="name...." onChange={e => this.state.name = e.target.value} />
             </FormGroup>
             <br />
             <FormGroup controlId="formHorizontalEmail">
                <h3> Email </h3>
                <input className="input"  type="text" placeholder="email...." onChange={e => this.state.email = e.target.value}/>
             </FormGroup>
             <br />
             <FormGroup controlId="formInlineName">
                <h3> Password </h3>
                <input className="input"  type="text" placeholder="name...." onChange={e => this.state.password = e.target.value} />
             </FormGroup>
             <br />
             <FormGroup controlId="formInlineName">
                <h3> Phonenumber </h3>
                <input className="input"  type="text" placeholder="phonenumber...." onChange={e => this.state.phonenumber = e.target.value}/>
             </FormGroup>
             <br />
             <FormGroup controlId="formInlineName">
                <h3> Address </h3>
                <input className="input"  type="text" placeholder="address...." onChange={e => this.state.address = e.target.value}/>
             </FormGroup>   
              <br />
             <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button className="accept" type="submit" onClick={this.handleFormSubmit}>Sign up</Button>
                </Col>
              </FormGroup>
          </Form>    
      </div>
    )
  }

}




 
  