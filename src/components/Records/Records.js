import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Link } from 'react-router-dom'

import Truncate from 'react-truncate';
import './Records.css';

import { getAllLeagues } from './../../selectors/index';

import { fetchLeagues } from './../../action/requests';

class Records extends Component {
    constructor(props){
        super(props);
      
    }
    componentWillMount(){
        
    }

    componentDidMount(){
        this.props.getLeagues();
       
    }
    

    render(){
       const data= this.props.leagues;
       console.log(data)
        return (
           <div className="row" id="records">
                {(this.props.leagues || []).map(item=>(
                    <div className="card col-sm-4" key={item.idLeague}>
                    <div className="card-body">
                     <h4 className="card-title">{item.strLeague}</h4>
                     <h5 className="card-title">{item.strSport}</h5>
                        <p>League Id: <b>{item.idLeague}</b></p>
                        <p>{item.strLeagueAlternate}</p>
                        <p><NavLink to={`/detail/${item.idLeague}`}>League Detail</NavLink></p>
                    </div>
                    
                 </div>
                ))}
            </div> 
        )
    }
}

const mapStateToProps=(state)=>({
    leagues: getAllLeagues(state)
})

const mapDispatchToProps=(dispatch)=>({
    getLeagues:()=>dispatch(fetchLeagues())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Records);