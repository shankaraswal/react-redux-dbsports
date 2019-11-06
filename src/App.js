import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom'

import Header from './components/Common/Header';
import Login from './components/Login/Login';
import Leagues from './components/Leagues/Leagues';
import Detail from './components/LeagueDetail/LeagueDetail';
import Nav from './components/Common/Nav';
import Counter from './components/Counter/Counter'
import RCounter from './components/Counter/RCounter'

export default class App extends Component{
  render(){
  return (
    <div className="App">
      <div className="">
          <Router>
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path='/home' component={Login} />
              <Route path='/leagues' component={Leagues} />
              <Route path='/detail/:id' component={Detail} />
              <Route path='/test' component={Counter} />
              <Route path='/rcount' component={RCounter} />
            </Switch>
            </div>
          </Router>
      </div>
    </div>
  );
}
}
