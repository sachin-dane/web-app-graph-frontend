
import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESSFULL,
    LOGIN_FAILURE,
} from '../../constants/actions'

export const loginRequested = data => {
    return {
        type: LOGIN_REQUESTED,
        payload: data
    };
};

export const loginSuccessfull = data => {
    return {
        type: LOGIN_SUCCESSFULL,
        payload: data
    };
};

export const loginFailure = data => {
    return {
        type: LOGIN_FAILURE,
        payload: data
    };
};