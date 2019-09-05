import { combineReducers } from 'redux';

import {
    SIGNUP_REQUESTED,
    SIGNUP_SUCCESSFULL,
    SIGNUP_FAILURE,
    RESET_SIGNUP
} from '../../constants/actions'


const signupReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_REQUESTED:
            return {
                ...state,
                isLoading: true,
                isSignupSuccessful: false
            };

        case SIGNUP_SUCCESSFULL:
            return {
                ...state,
                isLoading: false,
                ...action.payload,
                isSignupSuccessful: true
            };

        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                ...action.payload,
                isSignupSuccessful: false
            };
        case RESET_SIGNUP:
            return {
                ...state,
                isLoading: false,
                ...action.payload,
                isSignupSuccessful: false
            };


        default:
            return state;
    }
};

export default combineReducers({
    signupData: signupReducer
});
