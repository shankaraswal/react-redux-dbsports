import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Link } from 'react-router-dom'

import Truncate from 'react-truncate';
import './Leagues.css';
import MastHead from '../Common/MastHead'

import { getAllLeagues,getSports } from '../../selectors/index';
import { fetchLeagues } from '../../action/requests';

class Leagues extends Component {
    constructor(props){
        super(props);
        this.state={
            mastimg:'https://source.unsplash.com/bF2vsubyHcQ/1920x1080',
            leagues: [],
            uniquesports: []
        }
    }

    componentDidMount(){
       this.props.getLeagues();
        
       setTimeout(()=>{
            this.setState({
                leagues: this.props.leagues,
                uniquesports: this.props.uniquesports
            })
       }, 1000);
    }
        
    applyFilter = (e) =>{
       const type =e.target.value;
       const result =(type !== 'All') ? this.props.leagues.filter(val => val.strSport == type) : this.props.leagues;
       this.setState({
            leagues: result
        })
    }

    getUniqueSports = ()=>{
        const unique= [];
        (this.props.leagues || []).map(x => {
            return unique.filter(a => a.strSport == x.strSport).length > 0 ? null : unique.push(x);
        });
        
    }

    render(){
        return (
           <div className="" id="leagues">
               <MastHead url={this.state.mastimg} />
               
                <div className="filterBar clearfix">
                    <div className="float-right col-md-4">
                        <select className="form-control" onChange={this.applyFilter}>
                        <option value="All">Select All</option>
                        {this.state.uniquesports.map(item=>(
                            <option value={item.strSport} key={item.strSport}>{item.strSport}</option>
                        ))}
                        </select>    
                    </div>   
                </div>

               <div className="leaguesList">
                    {(this.state.leagues).map(item=>(
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
            </div> 
        )
    }
}

const mapStateToProps=(state)=>({
    leagues: getAllLeagues(state),
    uniquesports: getSports(state)
})

const mapDispatchToProps=(dispatch)=>({
    getLeagues:()=>dispatch(fetchLeagues())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Leagues);