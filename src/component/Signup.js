import React, { Component } from 'react';
import {
Container, Col, Form,
FormGroup, Label, Input,

} from 'reactstrap';
import { Link } from "react-router-dom"
import '../assets/stylesheets/stylesheet.css'
import Header from "../component/Header"
//import './App.css';

class Signup extends Component {

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
      <Header />
  <Container >
    <h2>Sign Up</h2>
    <Form >
    
      <Col>
      
        <FormGroup>
          <Label>Email           :</Label>
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
          <Label for="examplePassword">Password    :</Label>
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
          <Label>Confirm Password :</Label>
          <Input
            type="text"
            name="name"
            placeholder="Re-enter your passsword"
          />
        </FormGroup>
        
      </Col>
      
      <button onClick={this.handleClick} class="btn btn-primary">Register</button>
      </Form>
      <Label>Already a member? </Label> 
          <Link to='/'>Sign in</Link>
    
  </Container>
  </div>
);
}
}

export default Signup;
