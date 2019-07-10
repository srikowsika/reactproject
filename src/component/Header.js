import React from 'react';
import '../assets/stylesheets/stylesheet.css'
 class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <span >
        <img class="logo" src={require ('../assets/images/logo.jpeg')} alt='..'/>
        <h2> Movie Ticket Booking</h2>
        </span>
       
        
      </div>
    );
  }
}
export default Header;