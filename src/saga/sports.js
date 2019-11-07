import { call, put, select } from 'redux-saga/effects';

import {
    fetchSportsApi
} from '../api'

import { respSports } from '../action/responses'

function* handleSports(action) {
    try {
        const result = yield call(fetchSportsApi);
        yield put(respSports(result.data))

        } 
    catch (error) {
        console.log('error in saga: all sports api')
    }
}

export {
    handleSports

}