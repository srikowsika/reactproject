import React from 'react';
import { Nav, NavItem, NavLink,Button } from 'reactstrap';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        
        <Nav>
          <NavItem>
            <NavLink >Logo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Name</NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Button>Sign-in</Button></NavLink>
          </NavItem>
          
        </Nav>
        
      </div>
    );
  }
}