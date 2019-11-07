import React, { Component } from 'react';
import axios from 'axios';

export default class Header extends Component {
   
    render(){
        return (
            <div className="banner col-sm-12">
                <img src={this.props.url} className="img-responsive"></img>
            </div>


        )
    }

}