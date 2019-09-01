import {
    FETCH_SITES_LIST_REQUESTED,
    FETCH_SITES_LIST_SUCCESSFULL,
    FETCH_SITES_LIST_FAILURE,
} from '../../constants/actions'

export const fetchSitesListRequest = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: FETCH_SITES_LIST_REQUESTED,
        payload: data
    };
};

export const fetchSitesListSuccessful = data => {
    return {
        type: FETCH_SITES_LIST_SUCCESSFULL,
        payload: data
    };
};

export const fetchSitesListFailue = data => {
    return {
        type: FETCH_SITES_LIST_FAILURE,
        payload: data
    };
};