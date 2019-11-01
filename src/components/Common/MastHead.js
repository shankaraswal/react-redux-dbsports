import React, { Component } from 'react';
import axios from 'axios';

export default class Header extends Component {
   
    render(){
        return (
            <div className="banner">
                <img src={this.props.url} className="img-fluid"></img>
            </div>


        )
    }

}