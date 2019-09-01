import { combineReducers } from 'redux';

import {
    UPDATE_PROFILE_REQUESTED,
    UPDATE_PROFILE_SUCCESSFUL,
    UPDATE_PROFILE_FAILURE
} from '../../constants/actions'


const updateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUESTED:
            return {
                ...state,
                isLoading: true
            };

        case UPDATE_PROFILE_SUCCESSFUL:
            return {
                ...state,
                isLoading: false,
                ...action.payload
            };

        case UPDATE_PROFILE_FAILURE:
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
    updatePofileData: updateProfileReducer
});
