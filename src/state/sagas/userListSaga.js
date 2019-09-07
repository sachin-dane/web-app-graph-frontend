/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
    FETCH_USER_LIST_REQUESTED,
    ACTIVATE_USER_REQUESTED,
    DELETE_USER_REQUESTED,
    CHECK_USER_EXIST_REQUEST,
    FORGOT_PASSWORD_REQUESST
} from '../../constants/actions'

import {
    fetchUserListSuccessful,
    fetchUserListFailue,
    activateUserSuccessful,
    activateUserFailure,
    fetchUserListRequest,
    deleteUserSuccessful,
    deleteUserFailure,
    checkUserExistSuccess,
    checkUserExistFailure,
    forgotPasswordSuccess,
    forgotPasswordFailure
} from '../actions/userListActions';
import userListApi from '../../api/userListApi';

export function* fetchUserListRequestAsync(action) {
    const {
        response
        // error`
    } = yield call(userListApi.fetchUserListRequestAsync, action.payload);
    if (response) {

        yield put(fetchUserListSuccessful(response.data.data));
    } else {
        yield put(fetchUserListFailue());
    }
}
export function* activateUser(action) {
    const {
        response
        // error`
    } = yield call(userListApi.activateUser, action.payload);
    if (response) {
        yield put(fetchUserListRequest())
        yield put(activateUserSuccessful(response.data.data));
    } else {
        yield put(activateUserFailure());
    }
}

export function* deleteUser(action) {
    const {
        response
        // error`
    } = yield call(userListApi.deleteUser, action.payload.id);
    if (response) {
        yield put(fetchUserListRequest())
        yield put(deleteUserSuccessful(response.data.data));
    } else {
        yield put(deleteUserFailure());
    }
}

export function* checkUserExist(action) {
    const {
        response
        // error`
    } = yield call(userListApi.checkUserExist, action.payload);
    if (response && response.data.data.data.length > 0) {
        yield put(checkUserExistSuccess(response.data.data));
    } else {
        yield put(checkUserExistFailure(response.data.data));
    }
}

export function* forgotPassword(action) {
    const {
        response
        // error`
    } = yield call(userListApi.forgotPassword, action.payload);
    if (response) {
        yield put(forgotPasswordSuccess(response.data.data));
    } else {
        yield put(forgotPasswordFailure());
    }
}


export default function* userListSaga() {
    yield takeEvery(FETCH_USER_LIST_REQUESTED, fetchUserListRequestAsync);
    yield takeEvery(ACTIVATE_USER_REQUESTED, activateUser);
    yield takeEvery(DELETE_USER_REQUESTED, deleteUser);
    yield takeEvery(CHECK_USER_EXIST_REQUEST, checkUserExist);
    yield takeEvery(FORGOT_PASSWORD_REQUESST, forgotPassword);
}
