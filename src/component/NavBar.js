import React,{Component} from 'react';
import '../assets/stylesheets/stylesheet.css'

class NavBar extends Component{
    render()
    {
      return(
        <div>
        <ul>
          <li>Home</li>
          <li>News</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        </div>
      );

    }
}
export default NavBar;