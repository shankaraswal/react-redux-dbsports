import { call, put, select } from 'redux-saga/effects';

import {
    fetchLeaguesApi
} from './../api/records'

import { respLeagues } from './../action/responses'
function* handleAllRecords(action) {
    try {
        const result = yield call(fetchLeaguesApi);
        yield put(respLeagues(result.data))

        } 
    catch (error) {
        console.log('error in saga')
    }
}

export {
    handleAllRecords

}