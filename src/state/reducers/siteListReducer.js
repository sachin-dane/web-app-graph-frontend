import { combineReducers } from 'redux';
import sites from '../../static/seed/sites.json'
import {
    FETCH_SITES_LIST_REQUESTED,
    FETCH_SITES_LIST_SUCCESSFULL,
    FETCH_SITES_LIST_FAILURE,
} from '../../constants/actions'


const sitesListReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SITES_LIST_REQUESTED:
            return {
                ...state,
                isLoading: true,
                siteList: []
            };

        case FETCH_SITES_LIST_SUCCESSFULL:
            return {
                ...state,
                isLoading: false,
                siteList: sites
            };

        case FETCH_SITES_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                siteList: sites
            };

        default:
            return state;
    }
};

export default combineReducers({
    sitesListData: sitesListReducer
});
