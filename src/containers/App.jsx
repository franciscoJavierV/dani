import React from 'react';
import './styles/App.css';

//router
import { Route, Switch, BrowserRouter } from 'react-router-dom'

//containers
import Home from './Home'
import Album from './Album'
import Calendar from './Calendar'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route exact path='/album' component={Album} ></Route>
        <Route exact path='/chedule' component={Calendar} ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
