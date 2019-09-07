/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';

import {
    LOGIN_REQUESTED,
    GET_USER_REQUEST
} from '../../constants/actions'

import {
    loginSuccessfull,
    loginFailure,
    getUserFailure,
    getUserSuccessful
} from '../actions/loginActions';
import loginApi from '../../api/loginApi';

export function* loginApiRequest(action) {
    const {
        response
    } = yield call(loginApi.loginApiRequest, action.payload);

    if (response && response.data.status_code === 200) {

        yield put(loginSuccessfull(response.data.data.data));
    } else {

        yield put(loginFailure(response.data.data));
    }
}

export function* getUserDetails(action) {
    const {
        response
    } = yield call(loginApi.getUserDetails, action.payload);

    if (response && response.data.status_code === 200) {

        yield put(getUserSuccessful(response.data.data));
    } else {

        yield put(getUserFailure(response.data.data));
    }
}


export default function* loginSaga() {
    yield takeEvery(LOGIN_REQUESTED, loginApiRequest);
    yield takeEvery(GET_USER_REQUEST, getUserDetails);
}
