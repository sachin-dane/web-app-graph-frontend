/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';
import {
    FETCH_SITES_LIST_REQUESTED,
} from '../../constants/actions'

import {
    fetchSitesListSuccessful,
    fetchSitesListFailue
} from '../actions/siteListActions';
import siteListApi from '../../api/siteListApi';

export function* fetchSitesListRequest(action) {
    console.log('lgin action==>> ', action)
    const {
        response
        // error`
    } = yield call(siteListApi.fetchSitesListRequest, action.payload);
    console.log('userListSaga response==>> ', response)
    if (response) {

        yield put(fetchSitesListSuccessful());
    } else {
        console.log('userListSaga response==>> elseeee')
        yield put(fetchSitesListFailue());
    }
}

export default function* siteListSaga() {
    yield takeEvery(FETCH_SITES_LIST_REQUESTED, fetchSitesListRequest);
}
