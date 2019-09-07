/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
    UPDATE_PROFILE_REQUESTED,
} from '../../constants/actions'

import {
    updateProfileSuccessful,
    updateProfileFailure
} from '../actions/updateprofileActions';
import updateProfileApi from '../../api/updateProfileApi';

export function* updateProfileApiRequest(action) {
    const {
        response
        // error`
    } = yield call(updateProfileApi.updateProfileApiRequest, action.payload);
    if (response) {
        yield put(updateProfileSuccessful());
    } else {
        yield put(updateProfileFailure());
    }
}

export default function* profileUpdateSaga() {
    yield takeEvery(UPDATE_PROFILE_REQUESTED, updateProfileApiRequest);
}
