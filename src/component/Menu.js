import React,{Component} from 'react';
import '../assets/stylesheets/stylesheet.css'
//import {Nav, Navbar} from 'reactstrap'
class Menu extends Component{
render()
{
  return(
    <ul width='1800px'>
      <li><a href="/home">Home</a></li>
      <li><a href="/movie">Movie</a></li>
      <li><a href="/theater">Theater</a></li>
      <li><a href="/signin">Login</a></li>
    </ul>

  );

}
}
export default Menu;
