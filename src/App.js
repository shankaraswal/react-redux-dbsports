import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom'

import Header from './components/Common/Header';
import Login from './components/Login/Login';
import Records from './components/Records/Records';
import Detail from './components/Detail/Detail';
import Nav from './components/Common/Nav';
import Counter from './components/Counter'
import RCounter from './components/RCounter'

export default class App extends Component{
  render(){
  return (
    <div className="App">
      <div className="">
          <Router>
          <Nav />
          <Header />
          <div className="container">
            <Switch>
              <Route exact path='/home' component={Login} />
              <Route path='/records' component={Records} />
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
