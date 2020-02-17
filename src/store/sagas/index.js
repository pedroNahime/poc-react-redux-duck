import { all, takeLatest } from 'redux-saga/effects'
import { UserTypes } from '../ducks/User'
import { getUser } from './User'

export default function* rootSaga(){
    yield all([
        takeLatest(UserTypes.GET_USER, getUser),
    ])
}