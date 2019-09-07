/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';
import _ from 'lodash';
import {
    FETCH_SITES_LIST_REQUESTED,
    FETCH_USER_SITES_REQUESTED,
    FETCH_SITES_BYID_REQUEST,
    ASSIGN_USER_TO_SITE_REQUEST,
    CREATE_SITE_REQUEST
} from '../../constants/actions'

import {
    fetchSitesListSuccessful,
    fetchSitesListFailue,
    fetchUserSitesSuccessful,
    fetchUserSitesFailure,
    fetchSitesByidSuccessful,
    fetchSitesByidFailure,
    assignSiteToUserSuccessful,
    assignSiteToUserFailue,
    createSiteFailue,
    createSiteSuccessful,
    fetchSitesListRequest
} from '../actions/siteListActions';
import siteListApi from '../../api/siteListApi';

export function* fetchSitesListAsync(action) {
    const {
        response
    } = yield call(siteListApi.fetchSitesListAsync, action.payload);
    if (response && response.data.data.data.length) {

        yield put(fetchSitesListSuccessful(response.data.data.data));
    } else {
        yield put(fetchSitesListFailue());
    }
}

export function* fetchUserSpecificSites(action) {
    const {
        response
    } = yield call(siteListApi.fetchUserSpecificSites, action.payload);
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
        yield put(fetchUserSitesSuccessful(sites));
    } else {
        yield put(fetchUserSitesFailure());
    }
}

export function* fetchSitesById(action) {
    const {
        response
    } = yield call(siteListApi.fetchSitesById, action.payload);
    if (response) {
        if (response.data.data.data.length > 0) {
            let sitesBarData = {
                instantaneousObj: [['Event Date', 'Instantaneous', { role: 'style' }]],
                lifetimeObj: [['Event Date', 'LifeTime', { role: 'style' }]],
                siteName: response.data.data.data[0].site_name,
                status: response.data.data.data[0].status
            }
            let colorList = ['#2196f3', '#f3212d', '#2df321']
            response.data.data.data.map((item, index) => {
                let instantData = []
                let lifetimeData = []
                instantData.push(new Date(item.event_date).toLocaleDateString()) // DD/ MM /YYYY
                instantData.push(item.instantaneous)
                instantData.push(colorList[index])
                lifetimeData.push(new Date(item.event_date).toLocaleDateString())
                lifetimeData.push(item.lifetime)
                lifetimeData.push(colorList[index])
                sitesBarData.instantaneousObj.push(instantData)
                sitesBarData.lifetimeObj.push(lifetimeData)
            })
            yield put(fetchSitesByidSuccessful(sitesBarData));

        } else {
            yield put(fetchSitesByidFailure());
        }

    } else {
        yield put(fetchSitesByidFailure());
    }
}

export function* assignSiteToUser(action) {
    const {
        response
        // error`
    } = yield call(siteListApi.assignSiteToUser, action.payload);
    if (response) {

        yield put(assignSiteToUserSuccessful());
    } else {
        yield put(assignSiteToUserFailue());
    }
}

export function* createSiteRequest(action) {
    const {
        response
    } = yield call(siteListApi.createSiteRequest, action.payload);
    if (response) {
        yield put(fetchSitesListRequest())
        yield put(createSiteSuccessful());
    } else {
        yield put(createSiteFailue());
    }
}

export default function* siteListSaga() {
    yield takeEvery(FETCH_SITES_LIST_REQUESTED, fetchSitesListAsync);
    yield takeEvery(FETCH_USER_SITES_REQUESTED, fetchUserSpecificSites);
    yield takeEvery(FETCH_SITES_BYID_REQUEST, fetchSitesById);
    yield takeEvery(ASSIGN_USER_TO_SITE_REQUEST, assignSiteToUser);
    yield takeEvery(CREATE_SITE_REQUEST, createSiteRequest);
}


