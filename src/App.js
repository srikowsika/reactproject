import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import MovieCard from './component/MovieCard'
import Login from './component/Login';
import Register from './component/Register';
import NavBar from './component/NavBar.js';
function App() {
  return (
    <div>
      <NavBar />
      <MovieCard />
      {/*<BrowserRouter>
        <Switch>
          <Route path='/register' component={Register}></Route>
          <Route path='/' component={Login}></Route>
        </Switch>
      </BrowserRouter>
    <Register />*/}
    </div>
  );
}

export default App;
