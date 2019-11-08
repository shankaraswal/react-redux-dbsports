import { RESP_LEAGUES, RESP_LEAGUE_DETAIL, RESP_SPORTS, RESP_TEAMS, RESP_TEAM_DETAIL } from './../constant/actiontype';

    const respLeagues = (payload) => ({
        type: RESP_LEAGUES,
        payload
        })

    const respLeagueDetail = (payload) =>({
        type: RESP_LEAGUE_DETAIL,
        payload
        })
        
    const respSports =(payload)=>({
        type:RESP_SPORTS,
        payload
        })
    const respTeams = (payload)=>({
        type:RESP_TEAMS,
        payload
        })
    
    const respTeamDetail = (payload)=>({
        type:RESP_TEAM_DETAIL,
        payload
        })

export{
    respLeagues,
    respLeagueDetail,
    respSports,
    respTeams,
    respTeamDetail
    }