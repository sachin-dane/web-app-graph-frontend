import { combineReducers } from 'redux';

import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESSFULL,
    LOGIN_FAILURE,
} from '../../constants/actions'


const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUESTED:
            return {
                ...state,
                isLoading: true
            };

        case LOGIN_SUCCESSFULL:
            return {
                ...state,
                isLoading: false,
                ...action.payload
            };

        case LOGIN_FAILURE:
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
    loginData: loginReducer
});
