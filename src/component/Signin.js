import React, { Component } from 'react';
import {
Container, Col, Form,
FormGroup, Label, Input,

} from 'reactstrap';
import '../assets/stylesheets/stylesheet.css'
import { Link } from "react-router-dom"
import Header from "../component/Header"


class Signin extends Component {

constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
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
  
  <div className='div'>
  <Container >
    <h2>Sign In</h2>
    <Form >
      <Col>
        <FormGroup>
          <Label>Username  : </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter your username"
            onChange = {(event,newValue) => this.setState({username:newValue})}
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label for="examplePassword">Password  : </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter the Password"
            onChange = {(event,newValue) => this.setState({password:newValue})}
          />
        </FormGroup>
      </Col>
      <button onClick={this.handleClick} class="btn btn-primary">Sign in</button>
        <br></br>
      <Label>Not a member? </Label>
          <Link to='/signup'>Register</Link>
    </Form>
  </Container>
  </div>
  </div>
);
}
}

export default Signin;
