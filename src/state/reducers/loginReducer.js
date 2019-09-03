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
                isLoading: true,
                isLoggedIn: false,
                userData:{}
            };

        case LOGIN_SUCCESSFULL:
            console.log('Login reducer==>>', action.payload)
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
                userData:{}
            };

        default:
            return state;
    }
};

export default combineReducers({
    loginData: loginReducer
});
