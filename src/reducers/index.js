import { combineReducers } from 'redux';
import {leaguesReducer, leagueDetailReducer, sportsReducer, counterReducer, teamsReducer, teamDetailReducer} from './all-reducer';

const rootReducer = combineReducers({
    leaguesState:leaguesReducer,
    counterState:counterReducer,
    leagueDetailState:leagueDetailReducer,
    sportsState:sportsReducer,
    teamsState: teamsReducer,
    teamDetailState: teamDetailReducer
})

export default rootReducer;
