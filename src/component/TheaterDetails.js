import React, { Component } from 'react';
import '../assets/stylesheets/stylesheet.css';
import {Link} from 'react-router-dom';
class TheaterDetails extends Component {

    render(){
        return(
            <div>
                <h5>Movie Name:' '</h5>   <h5>Movie Description:' '</h5>
                
                <table class='theaterTable'>
                    <tr>
                        <th>Theater</th>
                        <th>Location</th>
                        <th>Seat Availablibity</th>
                        <th>Price</th>
                        <th>Book </th>

                    </tr>
                    <tr>
                        <td>AGS Cinemas</td>
                        <td>Navalur,Chennai</td>
                        <td>60</td>
                        <td>Rs.120</td>
                        <td><Link to='/book' >Book Now</Link></td>
                    </tr>
                    <tr>
                        <td>SK - MARLEN Cinemas</td>
                        <td>T-Nagar,Chennai</td>
                        <td>40</td>
                        <td>Rs.150</td>
                        <td><Link to='/book' >Book Now</Link></td>
                    </tr>
                    <tr>
                        <td>Mayajaal Multiplex</td>
                        <td>Kanathur, Chennai</td>
                        <td>46</td>
                        <td>Rs.170</td>
                        <td><Link to='/book' >Book Now</Link></td>
                    </tr>
                    <tr>
                        <td>Sathyam Cinemas</td>
                        <td>Royapeetah,Chennai</td>
                        <td>40</td>
                        <td>Rs.150</td>
                        <td><Link to='/book' >Book Now</Link></td>
                    </tr>
                    
                </table>
            </div>
        );
    }
}
export default TheaterDetails;