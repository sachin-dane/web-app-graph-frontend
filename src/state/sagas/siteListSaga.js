/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';
import _ from 'lodash';
import {
    FETCH_SITES_LIST_REQUESTED,
    FETCH_USER_SITES_REQUESTED
} from '../../constants/actions'

import {
    fetchSitesListSuccessful,
    fetchSitesListFailue,
    fetchUserSitesSuccessful,
    fetchUserSitesFailure
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

export function* fetchUserSpecificSites(action) {
    console.log('lgin action==>> ', action)
    const {
        response
        // error`
    } = yield call(siteListApi.fetchUserSpecificSites, action.payload);
    console.log('user Sites response==>> ', response.data.data)
    if (response) {

        let sites = {
            activeSites: [],
            proposeddSites: [],
            inactiveSites: []
        }
        response.data.data.data.map(item => {

            if (item.siteStatus === 1) {
                let data = {
                    label: item.site_name,
                    value: item.siteId
                }
                sites.activeSites.push(data)
            } else if (item.siteStatus === 2) {
                let data = {
                    label: item.site_name,
                    value: item.siteId
                }
                sites.proposeddSites.push(data)
            } else if (item.siteStatus === 0) {
                let data = {
                    label: item.site_name,
                    value: item.siteId
                }
                sites.inactiveSites.push(data)
            }

        })
        console.log('Result ==>>>', sites)
        yield put(fetchUserSitesSuccessful(sites));
    } else {
        console.log('userListSaga response==>> elseeee')
        yield put(fetchUserSitesFailure());
    }
}

export default function* siteListSaga() {
    yield takeEvery(FETCH_SITES_LIST_REQUESTED, fetchSitesListRequest);
    yield takeEvery(FETCH_USER_SITES_REQUESTED, fetchUserSpecificSites);
}


