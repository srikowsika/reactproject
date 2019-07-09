import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../component/Login';
import Register from '../component/Register';

//class RouterComponent extends Component {

 function RouterComponent()  {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route path='/register' component={Register}></Route>
        <Route path='/' component={Login}></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );

}
    



export default RouterComponent