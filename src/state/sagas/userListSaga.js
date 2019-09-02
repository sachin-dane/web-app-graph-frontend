/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
    FETCH_USER_LIST_REQUESTED,
} from '../../constants/actions'

import {
    fetchUserListSuccessful,
    fetchUserListFailue
} from '../actions/userListActions';
import userListApi from '../../api/userListApi';

export function* fetchUserListRequest(action) {
    console.log('lgin action==>> ', action)
    const {
        response
        // error`
    } = yield call(userListApi.fetchUserListRequest, action.payload);
    console.log('userListSaga response==>> ', response)
    if (response) {

        yield put(fetchUserListSuccessful(response.data.data));
    } else {
        console.log('userListSaga response==>> elseeee')
        yield put(fetchUserListFailue());
    }
}

export default function* userListSaga() {
    yield takeEvery(FETCH_USER_LIST_REQUESTED, fetchUserListRequest);
}
