import { combineReducers } from 'redux';

import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESSFULL,
    LOGIN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from '../../constants/actions'


const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case LOGIN_REQUESTED:
            return {
                ...state,
                isLoading: true,
                isLoggedIn: false,
                userData: {}
            };

        case LOGIN_SUCCESSFULL:
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('userDetails', JSON.stringify(action.payload[0]))
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                userData: action.payload[0]
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                ...action.payload,
                userData: {}
            };

        case GET_USER_REQUEST:
            return {
                ...state,
                // userData: {}
            };

        case GET_USER_SUCCESS:
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('userDetails', JSON.stringify(action.payload[0]))
            return {
                ...state,

                userData: action.payload[0]
            };

        case GET_USER_FAILURE:
            return {
                ...state,
                ...action.payload,
                // userData: {}
            };
        default:
            return state;
    }
};

export default combineReducers({
    loginData: loginReducer
});
