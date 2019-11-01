import { combineReducers } from 'redux';
import {leaguesReducer, counterReducer} from './records';

const rootReducer = combineReducers({
    leaguesState:leaguesReducer,
    counterState:counterReducer
})

export default rootReducer;
