/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import { takeEvery, put, call } from 'redux-saga/effects';
import _ from 'lodash';
import {
    FETCH_SITES_LIST_REQUESTED,
    FETCH_USER_SITES_REQUESTED,
    FETCH_SITES_BYID_REQUEST
} from '../../constants/actions'

import {
    fetchSitesListSuccessful,
    fetchSitesListFailue,
    fetchUserSitesSuccessful,
    fetchUserSitesFailure,
    fetchSitesByidSuccessful,
    fetchSitesByidFailure
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
    // console.log('user Sites response==>> ', response.data.data)
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

export function* fetchSitesById(action) {
    console.log('lgin action==>> ', action)
    const {
        response
        // error`
    } = yield call(siteListApi.fetchSitesById, action.payload);
    console.log('fetchSitesById response==>> ', response)
    if (response) {
        let sitesBarData = {
            instantaneousObj: [['Event Date', 'Instantaneous', { role: 'style' }]],
            lifetimeObj: [['Event Date', 'LifeTime', { role: 'style' }]],
        }

        let colorList = ['#2196f3', '#f3212d', '#2df321']

        response.data.data.data.map((item, index) => {
            console.log('index==>>', index)
            let instantData = []
            let lifetimeData = []
            instantData.push(item.event_date)
            instantData.push(item.instantaneous)
            instantData.push(colorList[index])
            lifetimeData.push(item.event_date)
            lifetimeData.push(item.lifetime)
            lifetimeData.push(colorList[index])
            sitesBarData.instantaneousObj.push(instantData)
            sitesBarData.lifetimeObj.push(lifetimeData)
        })
        console.log('sitesBarData==>>', sitesBarData)
        yield put(fetchSitesByidSuccessful(sitesBarData));
    } else {
        console.log('userListSaga response==>> elseeee')
        yield put(fetchSitesByidFailure());
    }
}

export default function* siteListSaga() {
    yield takeEvery(FETCH_SITES_LIST_REQUESTED, fetchSitesListRequest);
    yield takeEvery(FETCH_USER_SITES_REQUESTED, fetchUserSpecificSites);
    yield takeEvery(FETCH_SITES_BYID_REQUEST, fetchSitesById);


}


