/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
    LOGIN_REQUESTED,
} from '../../constants/actions'

import {
    loginSuccessfull,
    loginFailure
} from '../actions/loginActions';
import loginApi from '../../api/loginApi';

export function* loginApiRequest(action) {
    console.log('lgin action==>> ', action)
    const {
        response
        // error`
    } = yield call(loginApi.loginApiRequest, action.payload);
    if (response) {
        yield put(loginSuccessfull());
    } else {
        yield put(loginFailure());
    }
}

export default function* loginSaga() {
    yield takeEvery(LOGIN_REQUESTED, loginApiRequest);
}
