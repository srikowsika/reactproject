import React,{Component} from 'react';

class MovieCard extends Component
{
   render()
   {
       return(
        <div class="container">
        <div class="row">
          <div class="col-sm">
            <img height='40px' width= '150px' src={require ('../assets/images/KabirSingh.jpeg') } alt='..'></img>
          </div>
          <div class="col-lg">
            One of three columns
          </div>
          
        </div>
      </div>
       );
   }
}
export default MovieCard;