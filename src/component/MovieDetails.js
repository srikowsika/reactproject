import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
//import {Link } from "react-router-dom";
import '../assets/stylesheets/stylesheet.css';

//import '../assets/images/';
class MovieDetails extends Component{

constructor(props)
{
   super(props);
   this.state={
   isLogin: true
};
}

render(){
return (
<div>
  <Container>
    <Row>
     <Col>
        <div class="card">
          <img class="card-img-top" src={require ('../assets/images/KabirSingh.jpeg')} alt="Card  cap" />
          <div class="card-body">
            <h3 class="card-title">Kabir Signh</h3>
            <p class="card-text">2019 ‧ Drama/Action ‧ 2h 50m</p>
            <a href="/theater" class="btn btn-primary">Book Now</a>
          </div>
        </div>
      </Col>
      <Col>
        <div class="card">
          <img class="card-img-top" src={require ('../assets/images/spiderman.jpeg')} alt="Card cap" />
          <div class="card-body">
            <h3 class="card-title">Spiderman</h3>
            <p class="card-text">2019 ‧ Fantasy/Sci-fi ‧ 1h 50m </p>
            <a href="/theater" class="btn btn-primary">Book Now</a>
          </div>
        </div>
      </Col>
      <Col>
        <div class="card">
          <img class="card-img-top" src={require ('../assets/images/avengers.jpeg')} alt="Card cap" />
          <div class="card-body">
            <h3 class="card-title">Avengers</h3>
            <p class="card-text">2019 ‧ Fantasy/Sci-fi ‧ 1h 50m</p>
            <a href="/theater" class="btn btn-primary">Book Now</a>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <div class="card">
          <img class="card-img-top" src={require ('../assets/images/Annabelle.jpeg')} alt="Card cap" />
          <div class="card-body">
            <h3 class="card-title">Annabelle</h3>
            <p class="card-text">2019 ‧ Thriller/Mystery ‧ 1h 50m</p>
            <a href="/theater" class="btn btn-primary">Book Now</a>
          </div>
        </div>
      </Col>
      <Col>
        <div class="card">
          <img class="card-img-top" src={require ('../assets/images/gameover.jpeg')} alt="Card cap" />
          <div class="card-body">
            <h3 class="card-title">Game Over</h3>
            <p class="card-text">2019 ‧ Drama/Thriller ‧ 2h 42m</p>
            <a href="/theater" class="btn btn-primary">Book Now</a>
          </div>
        </div>
      </Col>
      <Col>
        <div class="card">
          <img class="card-img-top" src={require ('../assets/images/ratchasi.jpeg')} alt="Card cap" />
          <div class="card-body">
            <h3 class="card-title">Ratchasi</h3>
            <p class="card-text">2019 ‧ Drama ‧ 2h 50m</p>
            <a href="/theater" class="btn btn-primary">Book Now</a>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</div>
);
}}

export default MovieDetails;
