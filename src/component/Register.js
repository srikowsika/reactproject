import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import '../assets/stylesheets/stylesheet.css'
//import './App.css';

class Register extends Component {

  constructor(props)
  {
    super(props);

    this.state ={
      username :'',
      password :''
      
    }
  }

  handleClick(event)
  {
    event.preventDefault();
  }

  render() {
    return (
        <div>
      <Container >
        <h2>Sign Up</h2>
        <Form >
        
          <Col>
         
            <FormGroup>
              <Label>Email </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your email"
              />
            </FormGroup>
          </Col>
         <Col>
            <FormGroup>
              <Label for="examplePassword">Password </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Enter the Password"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Confirm Password </Label>
              <Input
                type="text"
                name="name"
                
                placeholder="Re-enter your passsword"
              />
            </FormGroup>
           
          </Col>
          
          <Button onClick={this.handleClick}>Register</Button>
        </Form>
      </Container>
      </div>
    );
  }
}

export default Register;
