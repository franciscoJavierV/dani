import React from 'react';
import './styles/App.css';

//router
import { Route, Switch, BrowserRouter } from 'react-router-dom'

//containers
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
