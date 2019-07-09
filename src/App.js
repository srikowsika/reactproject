import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import MovieCard from './component/MovieCard'
import Login from './component/Login';
import Register from './component/Register';
import Theater from './component/Theater'
//import MenuBar from './component/NavBar.js';
//import carousel from './component/carosel.js'
//import Header from './component/Header';

function App() {
  return (
    <div>
      {/*<Login />

      <Header />
      
      <carousel />
      */}
      
      <BrowserRouter>
        <Switch>
        <Route path='/movie' component={MovieCard}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/theater' component={Theater}></Route>
          <Route path='/' component={Login}></Route>
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
