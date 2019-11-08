import { call, put, select } from 'redux-saga/effects';

import {
    fetchLeagueDetailApi
} from '../api'

import { respLeagueDetail } from '../action/responses';

function* handleLeagueDetail(action) {
    try {
        const result = yield call(fetchLeagueDetailApi, action.id);
        yield put(respLeagueDetail(result))

        } 
    catch (error) {
        console.log('error in saga: league detail component')
    }
}

export {
    handleLeagueDetail

}