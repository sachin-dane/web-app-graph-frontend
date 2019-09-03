/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
    FETCH_USER_LIST_REQUESTED,
    ACTIVATE_USER_REQUESTED
} from '../../constants/actions'

import {
    fetchUserListSuccessful,
    fetchUserListFailue,
    activateUserSuccessful,
    activateUserFailure,
    fetchUserListRequest
} from '../actions/userListActions';
import userListApi from '../../api/userListApi';

export function* fetchUserListRequestAsync(action) {
    console.log('lgin action==>> ', action)
    const {
        response
        // error`
    } = yield call(userListApi.fetchUserListRequestAsync, action.payload);
    console.log('userListSaga response==>> ', response)
    if (response) {

        yield put(fetchUserListSuccessful(response.data.data));
    } else {
        console.log('userListSaga response==>> elseeee')
        yield put(fetchUserListFailue());
    }
}
export function* activateUser(action) {
    console.log('lgin action==>> ', action)
    const {
        response
        // error`
    } = yield call(userListApi.activateUser, action.payload);
    console.log('userListSaga response==>> ', response)
    if (response) {
        yield put(fetchUserListRequest())
        yield put(activateUserSuccessful(response.data.data));
    } else {
        console.log('userListSaga response==>> elseeee')
        yield put(activateUserFailure());
    }
}




export default function* userListSaga() {
    yield takeEvery(FETCH_USER_LIST_REQUESTED, fetchUserListRequestAsync);
    yield takeEvery(ACTIVATE_USER_REQUESTED, activateUser);
}
