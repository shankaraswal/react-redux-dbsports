import React, { Component } from 'react';
import axios from 'axios';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){

        return (
            <div className="jumbotron card card-image">
            <div className="container masthead">
                <img className="" src="https://source.unsplash.com/bF2vsubyHcQ/1920x1080" alt="First slide" />
            </div>
            </div>
        )
    }

}