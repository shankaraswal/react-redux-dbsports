import { 
    RESP_LEAGUES,
    RESP_LEAGUE_DETAIL,
    RESP_SPORTS,
    RESP_TEAMS,
    
    INCREMENT,
    DECREMENT
    } from '../constant/actiontype';

    const INITIAL_STATE = [];

    const leaguesReducer =(state = INITIAL_STATE, action)=>{
        switch(action.type) {
            case RESP_LEAGUES : {
                const allleagues = action.payload.leagues;
                return [allleagues];
                
            }
            default : return state;
        }
    }

    const leagueDetailReducer =(state = INITIAL_STATE, action)=>{
        switch(action.type) {
            case RESP_LEAGUE_DETAIL : {
                const leagueDetail = action.payload.data.leagues;
                return [leagueDetail ];
            }
            default : return [];
        }
    }
    const counterReducer = (state = 33, action) => {
        switch(action.type){
            case INCREMENT: 
                return state + 1;

            case DECREMENT : 
                return state -1;

            default: 
            return state;

            }
        }; 

    const sportsReducer =(state = INITIAL_STATE, action)=>{
        switch(action.type) {
            case RESP_SPORTS : {
                const allsports = action.payload;
                return allsports.sports;
                
            }
            default : return state;
        }
    }

    const teamsReducer =(state = INITIAL_STATE, action)=>{
        switch(action.type) {
            case RESP_TEAMS : {
                const teams = action.payload;
                return teams.data.teams;
                
            }
            default : return state;
        }
    }
    export {leaguesReducer, leagueDetailReducer, sportsReducer, counterReducer, teamsReducer};