import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import '../assets/stylesheets/stylesheet.css'
//import { BrowserRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom"
import Register from './Register'
//import './App.css';

class Login extends Component {

  
  render() {
    
    return (
      <div>
      <Container >
        <h2>Sign In</h2>
        <Form >
          <Col>
            <FormGroup>
              <Label>Username  </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your username"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password  </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Enter the Password"
              />
            </FormGroup>
          </Col>
          <Button>Sign in</Button><br></br>
          <Label>Not a member? </Label>
          <Route>
            <Link to='/register' component={Register}> <Button>Register</Button></Link>
          </Route>
          
        </Form>
      </Container>
      </div>
    );
  }
}

export default Login;
