import { combineReducers } from 'redux';
import {leaguesReducer, leagueDetailReducer, sportsReducer, counterReducer, teamsReducer} from './all-reducer';

const rootReducer = combineReducers({
    leaguesState:leaguesReducer,
    counterState:counterReducer,
    leagueDetailState:leagueDetailReducer,
    sportsState:sportsReducer,
    teamsState: teamsReducer
})

export default rootReducer;
