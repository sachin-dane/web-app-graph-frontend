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

    console.log('Saga response==>>', response.data.data.message)

    if (response && response.data.status_code === 200) {

        yield put(loginSuccessfull(response.data.data.data));
    } else {

        yield put(loginFailure(response.data.data));
    }
}

export default function* loginSaga() {
    yield takeEvery(LOGIN_REQUESTED, loginApiRequest);
}
