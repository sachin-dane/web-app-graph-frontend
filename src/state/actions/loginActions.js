import { toast } from 'react-toastify';
import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESSFULL,
    LOGIN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
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
    toast.error(`${data.message}`);
    return {
        type: LOGIN_FAILURE,
        payload: data
    };
};
export const getUserRequst = data => {
    return {
        type: GET_USER_REQUEST,
        payload: data
    };
};

export const getUserSuccessful = data => {
    return {
        type: GET_USER_SUCCESS,
        payload: data
    };
};

export const getUserFailure = data => {
    toast.error(`${data.message}`);
    return {
        type: GET_USER_FAILURE,
        payload: data
    };
};



