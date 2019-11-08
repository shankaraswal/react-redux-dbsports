import { LEAGUES, LEAGUE_DETAIL, SPORTS, INCREMENT, DECREMENT, TEAMS, TEAM_DETAIL  } from './../constant/actiontype';

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
const fetchLeagueDetail = (id) => ({
        type : LEAGUE_DETAIL,
        id
    });

//Sports component
const fetchAllSports = () =>({
        type : SPORTS
    });

//Teams component
const fetchTeams = (name) =>({
    type : TEAMS,
    name
});

//Team detail component
const fetchTeamDetail = (tid) =>({
    type : TEAM_DETAIL,
    tid
});

export{
    incAction,
    decAction,
    fetchLeagues,
    fetchLeagueDetail,
    fetchAllSports,
    fetchTeams,
    fetchTeamDetail
    }