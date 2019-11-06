import { takeLatest, all } from 'redux-saga/effects';

import {
    LEAGUES, LEAGUE_DETAIL
} from './../constant/actiontype';

import { handleLeagues } from './leagues'
import { handleLeagueDetail } from './league-detail'


function* watchAll() {
    yield all([
        takeLatest(LEAGUES, handleLeagues),
        takeLatest(LEAGUE_DETAIL, handleLeagueDetail)
    ])
}

export default watchAll;
