import { RESP_LEAGUES, RESP_LEAGUE_DETAIL } from './../constant/actiontype';

    const respLeagues = (payload) => ({
        type: RESP_LEAGUES,
        payload
    })

    const respLeagueDetail = (payload) =>({
        type: RESP_LEAGUE_DETAIL,
        payload
       })
        
export{
    respLeagues,
    respLeagueDetail
    }