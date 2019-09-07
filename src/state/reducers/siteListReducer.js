import { combineReducers } from 'redux';
import sites from '../../static/seed/sites.json'
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


const sitesListReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SITES_LIST_REQUESTED:
            return {
                ...state,
                allSites: {
                    isLoading: true,
                    siteList: []
                }
            };

        case FETCH_SITES_LIST_SUCCESSFULL:
            return {
                ...state,
                allSites: {
                    isLoading: false,
                    siteList: action.payload
                }
            };

        case FETCH_SITES_LIST_FAILURE:
            return {
                ...state,
                allSites: {
                    isLoading: false,
                    siteList: []
                }
            };


        case FETCH_USER_SITES_REQUESTED:
            return {
                ...state,
                userSites: {
                    isLoading: true,
                    siteList: []
                }
            };

        case FETCH_USER_SITES_SUCCESSFUL:
            return {
                ...state,
                userSites: {
                    isLoading: false,
                    siteList: action.payload
                }
            };

        case FETCH_USER_SITES_FAILURE:
            return {
                ...state,
                userSites: {
                    isLoading: false,
                    siteList: []
                }
            };

        case FETCH_SITES_BYID_REQUEST:
            return {
                ...state,
                sitesById: {
                    isLoading: true,
                    siteList: []
                }
            };

        case FETCH_SITES_BYID_SUCCESSFUL:
            return {
                ...state,
                sitesById: {
                    isLoading: false,
                    siteList: action.payload
                }
            };

        case FETCH_SITES_BYID_FAILURE:
            return {
                ...state,
                sitesById: {
                    isLoading: false,
                    siteList: []
                }
            };

        case ASSIGN_USER_TO_SITE_SUCCESSFUL:
            return {
                ...state,
                assignSiteUser: {
                    isLoading: true,
                    isAssignSuccess: true
                }
            };

        case ASSIGN_USER_TO_SITE_REQUEST:
            return {
                ...state,
                assignSiteUser: {
                    isLoading: false,
                    isAssignSuccess: false
                }
            };

        case ASSIGN_USER_TO_SITE_FAILURE:
            return {
                ...state,
                assignSiteUser: {
                    isLoading: false,
                    isAssignSuccess: false
                }
            };

        case RESET_ASSIGN_USER_TO_SITE:
            return {
                ...state,
                assignSiteUser: {
                    isLoading: false,
                    isAssignSuccess: false
                }
            };

        case CREATE_SITE_REQUEST:
            return {
                ...state,
                createSite: {
                    isLoading: true,
                    isSiteCreated: false
                }
            };

        case CREATE_SITE_SUCCESSFUL:
            return {
                ...state,
                createSite: {
                    isLoading: false,
                    isSiteCreated: true
                }
            };

        case CREATE_SITE_FAILURE:
            return {
                ...state,
                createSite: {
                    isLoading: false,
                    isSiteCreated: false
                }
            };

        case RESET_CREATE_SITE:
            return {
                ...state,
                createSite: {
                    isLoading: false,
                    isSiteCreated: false
                }
            };

        default:
            return state;
    }
};

export default combineReducers({
    sitesListData: sitesListReducer
});
