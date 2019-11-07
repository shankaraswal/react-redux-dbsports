import { call, put, select } from 'redux-saga/effects';

import {
    fetchTeamsApi
} from '../api'

import { respTeams } from '../action/responses';

function* handleTeams(action) {
    try {
        const result = yield call(fetchTeamsApi, action.name);
        yield put(respTeams(result))

        } 
    catch (error) {
        console.log('error in saga')
    }
}

export {
    handleTeams

}