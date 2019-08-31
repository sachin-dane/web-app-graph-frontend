import { combineReducers } from 'redux';

import {
    DASHBOARD_INCIDENT_TOP_RULES_REQUESTED,
    DASHBOARD_INCIDENT_TOP_RULES_SUCCESSFUL,
    DASHBOARD_INCIDENT_TOP_RULES_FAILURE
} from '../../constants/actions';

const topRulesReducer = (state = {}, action) => {
    switch (action.type) {
        case DASHBOARD_INCIDENT_TOP_RULES_REQUESTED:
            return {
                ...state,
                isLoading: true
            };

        case DASHBOARD_INCIDENT_TOP_RULES_SUCCESSFUL:
            return {
                ...state,
                isLoading: false,
                ...action.payload
            };

        case DASHBOARD_INCIDENT_TOP_RULES_FAILURE:
            return {
                ...state,
                isLoading: false,
                ...action.payload
            };

        default:
            return state;
    }
};

export default combineReducers({
    topRules: topRulesReducer
});
