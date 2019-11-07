import React, { Component } from 'react';
import  { connect } from 'react-redux';

import { NavLink, Link } from 'react-router-dom'
import './TeamDetail.css'
import MastHead from '../Common/MastHead'



class TeamDetail extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className="teamDetail" id="teamDetail">
                adfas
            </div>
        )
    }

}

const mapStateToProps=(state)=>({
    
    });

const mapDispatchToProps=(dispatch)=>({
    
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(TeamDetail)