import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Container, Row, Col } from 'reactstrap';
  import {Link } from "react-router-dom"
import '../assets/stylesheets/stylesheet.css'

class MovieCard extends Component{

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
      <Card>
        <CardImg top width="100%" src='./assets/images/KabirSingh.jpeg' alt="snow" />
        <CardBody>
          <CardTitle>Kabir Singh</CardTitle>
          <CardSubtitle>2019 ‧ Drama/Action ‧ 2h 52m</CardSubtitle>
          <CardText>Music : Amaal Mallik, Sachet–Parampara, Mithoon, Harshavardhan Rameshwar, Vishal Mishra, Akhil Sachdeva</CardText>
          {(this.state.isLogin ===true) ? <Link to='/theater'><Button>Book Now</Button></Link> : <Link to='/'><Button>Book Now</Button></Link>}
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card>
        <CardImg top width="100%" src="../assets/images/spiderman.jpeg" alt='snow'/>
        <CardBody>
          <CardTitle>Spider Man: Far From Home</CardTitle>
          <CardSubtitle>2019 ‧ Fantasy/Sci-fi ‧ 2h 9m</CardSubtitle>
          <CardText>Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.</CardText>
          {(this.state.isLogin ===true) ? <Link to='/theater'><Button>Book Now</Button></Link> : <Link to='/'><Button>Book Now</Button></Link>}
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card>
        <CardImg top width="100%" src="../assets/images/avengers" alt="Card image cap" />
        <CardBody>
          <CardTitle>Avengers: End Game</CardTitle>
          <CardSubtitle>2019 ‧ Fantasy/Sci-fi ‧ 3h 2m</CardSubtitle>
          <CardText>Avengers: Endgame is the fastest film to reach $500 million worldwide gross</CardText>
          {(this.state.isLogin ===true) ? <Link to='/theater'><Button>Book Now</Button></Link> : <Link to='/'><Button>Book Now</Button></Link>}
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>
    </div>
  );
}}

export default MovieCard;
