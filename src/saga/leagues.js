import { call, put, select } from 'redux-saga/effects';

import {
    fetchLeaguesApi
} from '../api'

import { respLeagues } from '../action/responses'

function* handleLeagues(action) {
    try {
        const result = yield call(fetchLeaguesApi);
        yield put(respLeagues(result.data))

        } 
    catch (error) {
        console.log('error in saga')
    }
}

export {
    handleLeagues

}