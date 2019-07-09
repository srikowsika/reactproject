import React, { Component } from 'react';
import '../assets/stylesheets/stylesheet.css';
import {Link} from 'react-router-dom';
class Theater extends Component {

    render(){
        return(
            <div>
                <table class='theaterTable'>
                    <tr>
                        <th>Theater</th>
                        <th>Location</th>
                        <th>Seat Availablibity</th>
                    </tr>
                    <tr>
                        <td><Link to=''>AGS Cinemas</Link></td>
                        <td>Navalur,Chennai</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <td><Link to=''>SK - MARLEN Cinemas</Link></td>
                        <td>T-Nagar,Chennai</td>
                        <td>40</td>
                    </tr>
                    
                </table>
            </div>
        );
    }
}
export default Theater;