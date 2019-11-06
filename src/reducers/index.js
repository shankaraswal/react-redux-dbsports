import { combineReducers } from 'redux';
import {leaguesReducer, leagueDetailReducer, counterReducer} from './all-reducer';

const rootReducer = combineReducers({
    leaguesState:leaguesReducer,
    counterState:counterReducer,
    leagueDetailState:leagueDetailReducer
})

export default rootReducer;
