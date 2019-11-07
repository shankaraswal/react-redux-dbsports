import { RESP_LEAGUES, RESP_LEAGUE_DETAIL, RESP_SPORTS, RESP_TEAMS } from './../constant/actiontype';

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

export{
    respLeagues,
    respLeagueDetail,
    respSports,
    respTeams
    }