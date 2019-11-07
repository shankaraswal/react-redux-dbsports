import { takeLatest, all } from 'redux-saga/effects';

import {
    LEAGUES, LEAGUE_DETAIL, SPORTS, TEAMS
} from './../constant/actiontype';

import { handleLeagues } from './leagues'
import { handleLeagueDetail } from './league-detail'

import { handleSports } from './sports'
import { handleTeams } from './teams'


function* watchAll() {
    yield all([
        takeLatest(LEAGUES, handleLeagues),
        takeLatest(LEAGUE_DETAIL, handleLeagueDetail),
        takeLatest(SPORTS, handleSports),
        takeLatest(TEAMS, handleTeams)
        
    ])
}

export default watchAll;
