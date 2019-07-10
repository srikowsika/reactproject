import React,{Component} from 'react';
import '../assets/stylesheets/stylesheet.css';
import {
    Label
    
  } from 'reactstrap';
class Book extends Component{

    render()
    {
       return(
        <div>
          <table>
            <tr>
              <Label>Enter the number of seat :</Label>
              <input
                type="number"
                name="seat"   
                placeholder="Enter number of seat"
                size='5'
              />
            </tr>
            <tr>
              <Label>Price :</Label>
              <input
                type="number"
                name="seat"   
                size='5'
              />
            </tr>
          
          
          </table>
        
    </div>
       ) ;
    }
}
export default Book;