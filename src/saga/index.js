import { takeLatest, all } from 'redux-saga/effects';

import {
    FETCH_ALL_RECORDS, LEAGUES
} from './../constant/actiontype';

import { handleAllRecords } from './records'


function* watchAll() {
    yield all([
        takeLatest(LEAGUES, handleAllRecords)
    ])
}

export default watchAll;
