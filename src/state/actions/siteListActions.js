import {
    FETCH_SITES_LIST_REQUESTED,
    FETCH_SITES_LIST_SUCCESSFULL,
    FETCH_SITES_LIST_FAILURE,
    FETCH_USER_SITES_REQUESTED,
    FETCH_USER_SITES_SUCCESSFUL,
    FETCH_USER_SITES_FAILURE,
    FETCH_SITES_BYID_REQUEST,
    FETCH_SITES_BYID_SUCCESSFUL,
    FETCH_SITES_BYID_FAILURE,
    ASSIGN_USER_TO_SITE_REQUEST,
    ASSIGN_USER_TO_SITE_SUCCESSFUL,
    ASSIGN_USER_TO_SITE_FAILURE,
    RESET_ASSIGN_USER_TO_SITE,
    CREATE_SITE_REQUEST,
    CREATE_SITE_SUCCESSFUL,
    CREATE_SITE_FAILURE,
    RESET_CREATE_SITE
} from '../../constants/actions'
import { toast } from 'react-toastify';

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

export const fetchUserSitesRequest = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: FETCH_USER_SITES_REQUESTED,
        payload: data
    };
};

export const fetchUserSitesSuccessful = data => {
    return {
        type: FETCH_USER_SITES_SUCCESSFUL,
        payload: data
    };
};

export const fetchUserSitesFailure = data => {
    return {
        type: FETCH_USER_SITES_FAILURE,
        payload: data
    };
};

export const fetchSitesByidRequest = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: FETCH_SITES_BYID_REQUEST,
        payload: data
    };
};

export const fetchSitesByidSuccessful = data => {
    return {
        type: FETCH_SITES_BYID_SUCCESSFUL,
        payload: data
    };
};

export const fetchSitesByidFailure = data => {
    return {
        type: FETCH_SITES_BYID_FAILURE,
        payload: data
    };
};


export const assignSiteToUserRequest = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: ASSIGN_USER_TO_SITE_REQUEST,
        payload: data
    };
};

export const assignSiteToUserSuccessful = data => {
    toast.success('User Assigned to site successfully.')
    return {
        type: ASSIGN_USER_TO_SITE_SUCCESSFUL,
        payload: data
    };
};

export const assignSiteToUserFailue = data => {
    toast.success('Something Went wrong')
    return {
        type: ASSIGN_USER_TO_SITE_FAILURE,
        payload: data
    };
};

export const resetAssignSiteToUser = data => {
    return {
        type: RESET_ASSIGN_USER_TO_SITE,
        payload: data
    };
};




export const createSiteRequest = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: CREATE_SITE_REQUEST,
        payload: data
    };
};

export const createSiteSuccessful = data => {
    toast.success('Site is created successfully.')
    return {
        type: CREATE_SITE_SUCCESSFUL,
        payload: data
    };
};

export const createSiteFailue = data => {
    toast.error('Something Went wrong')
    return {
        type: CREATE_SITE_FAILURE,
        payload: data
    };
};

export const resetCreateSite = data => {
    return {
        type: RESET_CREATE_SITE,
        payload: data
    };
};







