import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom'
import './Common.css'
export default class Nav extends Component {

    render(){
        return (
          <div>
          <div className="bgtop"><h3>Hot Summer Sale - Save 50%</h3></div>
          <div className="navbarWrapper">
            <nav className="navbar container">
                <div className="">
                  <div className="navbar-header">``
                    <NavLink className="navbar-brand" to="/">WebSiteName</NavLink>
                  </div>
                  <ul className="nav navbar-nav">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/leagues'>All Leagues</NavLink></li>
                    <li><NavLink to='/sports'>All Sports</NavLink></li>
                    {/*<li><NavLink to='/test'>Counter</NavLink></li>
                    <li><NavLink to='/rcount'>R-Count</NavLink></li>*/}
                  </ul>
                </div>
            </nav>
            </div>
          </div>
        )
    }
}