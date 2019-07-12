import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

//import "../node_modules/reactstrap/dist/reactstrap.min.js"

import MovieDetails from '../component/MovieDetails'
import Signin from '../component/Signin';
import Signup from '../component/Signup';
import TheaterDetails from '../component/TheaterDetails'
import Home from '../component/Home';
import Book from '../component/Book';
//import carousel from './component/carosel.js'
//import Header from './component/Header';
import MovieCard from '../component/MovieCard';
const RouterComponent=()=> {

return(
  <div> 
    <BrowserRouter>
      <Switch>
        
        <Route path='/movie' component={MovieDetails}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/theater' component={TheaterDetails}></Route>
        <Route path='/signin' component={Signin}></Route>
        <Route path='/' component={Home}></Route>
        <Route path='/book' component={Book}></Route>
        <Route path='/card' component={MovieCard}></Route>
      </Switch>
    </BrowserRouter>
  
  </div>);

} 

export default RouterComponent;