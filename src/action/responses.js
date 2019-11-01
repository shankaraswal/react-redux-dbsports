import { RESP_LEAGUES } from './../constant/actiontype';

const respLeagues = (payload) => ({
            type: RESP_LEAGUES,
            payload
        })
        
export{
    respLeagues
    }