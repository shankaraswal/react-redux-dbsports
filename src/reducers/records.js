import { 
    LEAGUES,
    RESP_LEAGUES,
    INCREMENT,
    DECREMENT
    } from './../constant/actiontype';

    const INITIAL_STATE = {};

    const leaguesReducer =(state = INITIAL_STATE, action)=>{
        switch(action.type) {
            case LEAGUES : {
                return {...state};
            }
            case RESP_LEAGUES : {
                const allleagues = action.payload.leagues;
                return {...state, allleagues};
                
            }
            default : return state;
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

    export {leaguesReducer, counterReducer};