import { LEAGUES, INCREMENT, DECREMENT  } from './../constant/actiontype';

const fetchLeagues = () => ({
        type : LEAGUES
    });

const incAction = () => ({
        type : INCREMENT
    });
    
const decAction = () => ({
        type: DECREMENT
    })

export{
    fetchLeagues,
    incAction,
    decAction
    }