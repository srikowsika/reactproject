import React,{Component} from 'react'
import {   
    Button
  } from 'reactstrap';
  import { Link } from "react-router-dom"

class MovieCard extends Component{
  

    render(){
        return(
        <div class="card" >
  <img class="card-img-top" src="./movie1.jpeg" alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/theater'><Button>Book Now</Button></Link>
  </div>
  </div>
    );
    }
}
export default MovieCard;