import {
    SIGNUP_REQUESTED,
    SIGNUP_SUCCESSFULL,
    SIGNUP_FAILURE,
} from '../../constants/actions'

export const signupRequested = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: SIGNUP_REQUESTED,
        payload: data
    };
};

export const signupSuccessfull = data => {
    return {
        type: SIGNUP_SUCCESSFULL,
        payload: data
    };
};

export const signupFailure = data => {
    return {
        type: SIGNUP_FAILURE,
        payload: data
    };
};