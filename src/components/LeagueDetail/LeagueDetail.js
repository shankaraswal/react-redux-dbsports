import React, { Component } from 'react';
import { connect } from "react-redux";

import { NavLink, Link } from 'react-router-dom'
import './LeagueDetail.css'
import MastHead from '../Common/MastHead'

import { getLeagueDetail } from '../../selectors/index';
import { fetchLeagueDetail } from '../../action/requests';

class LeagueDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            detail:[]
        }
    }

    
    componentDidMount(){
        let leagueId =this.props.match.params.id;
        console.log(leagueId)
        this.props.actLeagueDetail(leagueId)
    }

    componentWillMount(){
        //this.props.clearData([]);
    }

    render(){
        console.log(this.props.leagueDetail)
        return (
           <div>
              {(this.props.leagueDetail || []).map((item)=>(
                    <div key={item.idLeague}>
                        <MastHead url={item.strFanart2 ? item.strFanart2 : item.strBadge} />
                        <div className="col-md-12 blog-main">
                        <h2 className="blog-post-meta">{item.strLeague} / {item.strLeagueAlternate}</h2>
                            <div className="blog-post row">
                                <div className="col-md-9">
                                    <h4 className="blog-post-title">
                                        <p>Sport: {item.strSport}</p> 
                                        <p>Country: {item.strCountry}</p>
                                        <p>League Id: {item.idLeague}</p>
                                    </h4>
                                </div>
                                <div className="col-md-3">
                                    <img src={item.strTrophy} className="img-responsive" />
                                    <img src={item.strLogo} className="img-responsive" />
                                    <img src={item.strBadge} className="img-responsive" />
                                    
                                </div>
                                </div>
                                <div className="row imgGal text-center">                                
                                <img src={item.strPoster}  className="img-responsive my-4" />
                                <img src={item.strBanner}  className="img-responsive" />
                                <img src={item.strFanart1}  className="img-responsive" />
                                <img src={item.strFanart2}  className="img-responsive" />
                                <img src={item.strFanart3}  className="img-responsive" />
                                <img src={item.strFanart4}  className="img-responsive" />
                            </div>
 

                            </div>
                    </div>
                ))}  
           </div> 
        )
    }
}

const mapStateToProps=(state)=>({
    leagueDetail: getLeagueDetail(state)
    });

const mapDispatchToProps=(dispatch)=>({
    actLeagueDetail:(lid)=>dispatch(fetchLeagueDetail(lid))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(LeagueDetail)