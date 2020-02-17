import {call, put} from 'redux-saga/effects'
import api from '../../../services/api'

import {Creators as userActions} from "../../ducks/User";

export function* getUser() {
    try {
        const {data} = yield call(api.get);
        yield put(userActions.successUser(data.results))
    }catch (e) {
        yield put(userActions.errorUser())
    }
}