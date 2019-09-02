import { combineReducers } from 'redux';

import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESSFULL,
    LOGIN_FAILURE,
} from '../../constants/actions'


const loginReducer = (state = {}, action) => {
    console.log('Login reducer==>>', action.payload)
    switch (action.type) {
        case LOGIN_REQUESTED:
            return {
                ...state,
                isLoading: true,
                isLoggedIn: false
            };

        case LOGIN_SUCCESSFULL:
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
                ...action.payload
            };

        default:
            return state;
    }
};

export default combineReducers({
    loginData: loginReducer
});
