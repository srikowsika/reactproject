import React from 'react';
import { Nav, NavItem, NavLink,Button } from 'reactstrap';
import CarouselHeader from '../component/carosel'
export default class Header extends React.Component {
  render() {
    return (
      <div>
        
        <Nav>
          <NavItem>
          <img src={require ('../assets/images/logo.jpeg')} width="150" height="150" alt='logo'/>
          </NavItem>
          <NavItem>
            <NavLink>Name</NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Button>Sign-in</Button></NavLink>
          </NavItem>
          
        </Nav>
         <CarouselHeader />
      </div>
    );
  }
}