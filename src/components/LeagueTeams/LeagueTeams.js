import React, {Component} from 'react';
import { connect } from 'react-redux';

import { NavLink, Link } from 'react-router-dom'
import Truncate from 'react-truncate';

import './LeagueTeams.css'
import MastHead from '../Common/MastHead'

import { getTeams } from '../../selectors/index';
import { fetchTeams } from '../../action/requests';

class LeagueTeams extends Component{
    constructor(props){
        super(props);
        this.state={
            teams:[],
            leagueName: ''
        }
    }
    componentDidMount(){
        let name =this.props.match.params.name;
        this.setState({
            leagueName:name,
            imgMast: 'https://www.thesportsdb.com/images/media/event/fanart/28rj8p1553107197.jpg'
        })
        this.props.actTeams(name)
    }
    render(){
        console.log(this.props.teams)
        return(
            <div className="teams" id="teams">
                <MastHead url={this.state.imgMast} />
                <h1 className="col-md-12 mb-4">{this.state.leagueName}</h1>
                {(this.props.teams || []).map(item=>(
                    <div className="card mb-3 col-md-6" key={item.idTeam}>
                    <div className="inner no-gutters">
                      <div className="col-md-4">
                        <img src={item.strTeamBadge} className="card-img img-responsive" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h4 className="card-title">{item.strTeam}</h4>
                          <p className="card-text">
                             <b>{item.strSport}</b><br />  
                            <i>{item.strStadium}, {item.strStadiumLocation}</i><br />
                            <small className="text-muted">
                                <Truncate lines={3} ellipsis={<span>... <NavLink to={`/teamdetail/${item.idTeam}`}>Read more</NavLink></span>}>
                                     {item.strDescriptionEN}
                                </Truncate>
                        </small>
                        </p>
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
    teams: getTeams(state)
})

const mapDispatchToProps=(dispatch)=>({
    actTeams:(name)=>dispatch(fetchTeams(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(LeagueTeams)