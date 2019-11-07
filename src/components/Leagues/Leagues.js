import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, Link } from 'react-router-dom'

import Truncate from 'react-truncate';
import './Leagues.css';
import MastHead from '../Common/MastHead'

import { getAllLeagues, getSportsType } from '../../selectors/index';
import { fetchLeagues } from '../../action/requests';

class Leagues extends Component {
    constructor(props){
        super(props);
        this.state={
            mastimg:'https://www.thesportsdb.com/images/media/league/fanart/xpwsrw1421853005.jpg',
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
  
    
    applyLeaguesFilter = (e) =>{
        const type =e.target.value;
        const results= this.props.leagues.filter((item)=>{
            return (item.strLeague).toLowerCase().search(type.toLowerCase()) !== -1;
          });
         // console.log(results)
          this.setState({leagues: results});

     }


    render(){
        return (
           <div className="leagues" id="leagues">
               <MastHead url={this.state.mastimg} />

               <div className="searchBar">
                <nav className="navbar">
                        <form className="form-inline">
                            <div className="col-md-8">
                            <select className="form-control" onChange={this.applyFilter}>
                                <option value="All">Select All</option>
                                {this.state.uniquesports.map(item=>(
                                    <option value={item.strSport} key={item.strSport}>{item.strSport}</option>
                                ))}
                            </select>

                            </div>
                            <div className="md-for col-md-4">
                                <span className="search">
                                    <input onChange={this.applyLeaguesFilter} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />  
                                    <button className="btn btn-sm btn-danger">Search</button>
                                </span>
                            </div>
                        </form>
                    </nav>
                </div>

               <div className="leaguesList">
                    {(this.state.leagues).map(item=>(
                        <div className="card col-sm-4" key={item.idLeague}>
                        <div className="card-body">
                        <h4 className="card-title">{item.strLeague}</h4>
                        <h5 className="card-title">{item.strSport}</h5>
                            <p>League Id: <b>{item.idLeague}</b></p>
                            <p>{item.strLeagueAlternate}</p>
                            <p><NavLink to={`/leaguedetail/${item.idLeague}`}>League Detail</NavLink></p>
                            <p><NavLink to={`/teams/${item.strLeague}`}>Teams in League</NavLink></p>
                        </div>
                            
                        </div>
                    ))}
                </div>
            </div> 
        )
    }
}

const mapStateToProps=(state)=>({
    leagues: getAllLeagues(state), //selector
    uniquesports: getSportsType(state) //selector
})

const mapDispatchToProps=(dispatch)=>({
    getLeagues:()=>dispatch(fetchLeagues()) //action
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Leagues);