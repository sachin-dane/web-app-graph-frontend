/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
    SIGNUP_REQUESTED,
} from '../../constants/actions'

import {
    signupSuccessfull,
    signupFailure
} from '../actions/loginActions';
import signupApi from '../../api/signupApi';

export function* signupApiRequest(action) {
    console.log('lgin action==>> ', action)
    const {
        response
        // error`
    } = yield call(signupApi.signupApiRequest, action.payload);
    if (response) {
        yield put(signupSuccessfull());
    } else {
        yield put(signupFailure());
    }
}

export default function* signupSaga() {
    yield takeEvery(SIGNUP_REQUESTED, signupApiRequest);
}
