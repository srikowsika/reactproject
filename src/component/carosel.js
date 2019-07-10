import React from 'react';
import {Carousel} from 'reactstrap'

class CarouselHeader extends React.Component{

render()
{
    return(
      
<div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
    <img src={require ('../assets/images/KabirSingh.jpeg')} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-interval="2000">
    <img src={require ('../assets/images/spiderman.jpeg')} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
    <img src={require ('../assets/images/avengers.jpeg')} class="d-block w-100" alt="..." />
    </div>
  </div>
  <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  
</div>


);
}
}

export default CarouselHeader;