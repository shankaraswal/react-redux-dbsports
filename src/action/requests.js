import { LEAGUES, LEAGUE_DETAIL, INCREMENT, DECREMENT  } from './../constant/actiontype';

//RCounter component
const incAction = () => ({
        type : INCREMENT
    });
    
const decAction = () => ({
        type: DECREMENT
    })

//Leagues compoennt
const fetchLeagues = () => ({
        type : LEAGUES
    });

//LeagueDetail component
const fetchLeagueDetail = (id) =>{
    console.log('get call');
    return {
        type : LEAGUE_DETAIL,
        id
    }};

export{
    incAction,
    decAction,
    fetchLeagues,
    fetchLeagueDetail
    }