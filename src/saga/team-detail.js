import { call, put, select } from 'redux-saga/effects';

import {
    fetchTeamDetailApi
} from '../api'

import { respTeamDetail } from '../action/responses';

function* handleTeamDetail(action) {
    console.log(action.tid)
    try {
        const result = yield call(fetchTeamDetailApi, action.tid);
        yield put(respTeamDetail(result))

        } 
    catch (error) {
        console.log('error in saga: team detail component')
    }
}

export {
    handleTeamDetail

}