import React, { Component } from 'react';
import  { connect } from 'react-redux';

import { NavLink, Link } from 'react-router-dom'
import './TeamDetail.css'
import MastHead from '../Common/MastHead'
import { getTeamDetail } from '../../selectors';
import { fetchTeamDetail } from '../../action/requests'



class TeamDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            teamdetail:[]
        }
    }
    componentDidMount(){
        let teamId =this.props.match.params.tid;
        this.props.actTeamDetail(teamId)
    }

    render(){
        return(
            <div className="teamDetail" id="teamDetail">
                {(this.props.teamDetail || []).map(item=>(
                    <div key={item.idTeam}>
                        <div className="imgBanner">
                         <img src={item.strTeamFanart2} />
                         </div>
                        <div class="jumbotron jumbotron-fluid">
                            <div class="container">
                                <h1 class="display-4">{item.strTeam} {item.strAlternate}</h1>
                                <div className="row">
                                    
                                    <div class="col-md-6">    <p>{item.idLeague}</p>
                                    <p>{item.idTeam}</p>
                                    <p>{item.strCountry}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={item.strTeamLogo} className="logo img-responsive" />
</div></div>
                                
                                 <h3>About Team</h3>
                                <p class="">{item.strDescriptionEN}</p>
                                <div className="imgBucket">
                                    <img src={item.strTeamBadge} />
                                    <img src={item.strTeamBanner} />
                                    <img src={item.strTeamJersey} />
                                    <img src={item.strTeamFanart1} />
                                    <img src={item.strTeamFanart2} />
                                    <img src={item.strTeamFanart3} />
                                    <img src={item.strTeamFanart4} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}

const mapStateToProps=(state)=>({
    teamDetail:getTeamDetail(state)
    });

const mapDispatchToProps=(dispatch)=>({
    actTeamDetail:(tid)=>dispatch(fetchTeamDetail(tid))
    });

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(TeamDetail)