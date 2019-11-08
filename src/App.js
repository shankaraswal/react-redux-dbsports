import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom'

import Header from './components/Common/Header';
import Nav from './components/Common/Nav';

import Login from './components/Login/Login';
import Leagues from './components/Leagues/Leagues';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import LeagueTeams from './components/LeagueTeams/LeagueTeams';
import TeamDetail from './components/TeamDetail/TeamDetail';

import Sports from './components/Sports/Sports';

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
                <Route path='/leaguedetail/:lid' component={LeagueDetail} />
                <Route path='/teams/:name' component={LeagueTeams} />
                <Route path='/teamdetail/:tid' component={TeamDetail} />
                <Route path='/test' component={Counter} />
                <Route path='/rcount' component={RCounter} />
                <Route path='/sports' component={Sports} />
              </Switch>
              </div>
            </Router>
        </div>
      </div>
    );
  }
}
