import React, { Component } from 'react';
import axios from 'axios';
import Truncate from 'react-truncate';
import { NavLink, Link } from 'react-router-dom'
import './Detail.css'
import MastHead from './../Common/MastHead'

export default class Records extends Component {
    constructor(props){
        super(props);
        this.state={
            detail:[]
        }
    }


    componentDidMount(){
        const leagueId= this.props.match.params.id,
        url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        this.getApiData(url)

    }
    getApiData = async (url)=>{
        const leagueDetail = await axios.get(url);
        this.setState({
            detail: leagueDetail.data.leagues

        })
    }

    render(){
        console.log(this.state.detail)
        return (
           <div>
                {this.state.detail.map((item)=>(
                    <div key={item.idLeague}>
                        <MastHead url={item.strFanart2} />
                        <ul>
                            <li>{item.strSport}</li>
                            <li>{item.strLeague}</li>
                            <li>{item.strLeagueAlternate}</li>
                            <li>{item.strCountry}</li>
                            <li>{item.strSport}</li>
                            <li>{item.strSport}</li>
                        </ul>
                        <p>{item.strDescriptionEN}</p>
                    </div>
                ))}
           </div> 
        )
    }

}