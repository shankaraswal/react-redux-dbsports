
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import './Sports.css';

import MastHead from './../Common/MastHead'
import { getSportsList } from '../../selectors/index';
import { fetchAllSports } from '../../action/requests';

class Sports extends Component{
    constructor(props){
        super(props);
        this.state={
            mastimg:'https://www.thesportsdb.com/images/media/event/fanart/85mfhn1572455436.jpg',
            sports: []
        }
    }

    componentDidMount(){
        this.props.getAllSports();
        setTimeout(()=>{
            this.setState({
                sports: this.props.sports
            })
        },700)
    }

     applySportsFilter = (e) =>{
        const type =e.target.value;
        const results= this.props.sports.filter((item)=>{
            return (item.strSport).toLowerCase().search(type.toLowerCase()) !== -1;
          });
         // console.log(results)
          this.setState({sports: results});

     }

    render(){
               
        return (
            <div className="sports" id="sports">
               <MastHead url={this.state.mastimg} />
               <div className="searchBar">
                <nav className="navbar">
                        <form className="form-inline">
                            <div className="col-md-8"></div>
                            <div className="md-for col-md-4">
                                <span className="search">
                                    <input onChange={this.applySportsFilter} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />  
                                    <button className="btn btn-sm btn-danger">Search</button>
                                </span>
                            </div>
                        </form>
                    </nav>
                </div>

                <div className="sportsList">
                {this.state.sports.map(item=>(
                    <div className="card col-md-3" key={item.idSport}>
                    <img src={item.strSportThumb} className="card-img-top" alt={item.strSport} />
                        <div className="card-body">
                        <h4 className="card-title">{item.idSport}: {item.strSport}</h4>
                        <p><b>{item.TeamvsTeam}</b></p>
                        <p className="card-text">
                        <Truncate lines={3} ellipsis={<span>... <NavLink to={`/sports/${item.idSport}`}>Read more</NavLink></span>}>
                            {item.strSportDescription}
                        </Truncate></p>
                       
                        </div>
                    </div>
                    
                ))}
                </div>
            </div>
            )
        }
    }

const mapStateToProps=(state)=>({
    sports:getSportsList(state) //selector
})

const mapDispatchToProps=(dispatch)=>({
    getAllSports:()=>dispatch(fetchAllSports()) //action
})

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(Sports)