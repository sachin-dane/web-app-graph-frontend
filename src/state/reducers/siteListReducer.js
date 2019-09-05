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
    FETCH_SITES_BYID_FAILURE
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
                    siteList: sites
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
        default:
            return state;
    }
};

export default combineReducers({
    sitesListData: sitesListReducer
});
