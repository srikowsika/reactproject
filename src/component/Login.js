import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import '../assets/stylesheets/stylesheet.css'
import { Link } from "react-router-dom"


class Login extends Component {

  handleClick(event)
  {
    event.preventDefault();
  }

  
  
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
          <Button class="btn btn-success">Sign in</Button><br></br>
          <Label>Not a member? </Label>
             <Link to='/register'>Register
             </Link>
           
              
          
        </Form>
      </Container>
      </div>
    );
  }
}

export default Login;
