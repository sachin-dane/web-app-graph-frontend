import { toast } from 'react-toastify';
import {
    FETCH_USER_LIST_REQUESTED,
    FETCH_USER_LIST_SUCCESSFULL,
    FETCH_USER_LIST_FAILURE,
    ACTIVATE_USER_REQUESTED,
    ACTIVATE_USER_SUCCESSFUL,
    ACTIVATE_USER_FAILURE,
} from '../../constants/actions'

export const fetchUserListRequest = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: FETCH_USER_LIST_REQUESTED,
        payload: data
    };
};

export const fetchUserListSuccessful = data => {
    return {
        type: FETCH_USER_LIST_SUCCESSFULL,
        payload: data
    };
};

export const fetchUserListFailue = data => {
    return {
        type: FETCH_USER_LIST_FAILURE,
        payload: data
    };
};


export const activateUserRequest = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: ACTIVATE_USER_REQUESTED,
        payload: data
    };
};

export const activateUserSuccessful = data => {
    toast.info(`User is activated successfully.`)
    return {
        type: ACTIVATE_USER_SUCCESSFUL,
        payload: data
    };
};

export const activateUserFailure = data => {
    return {
        type: ACTIVATE_USER_FAILURE,
        payload: data
    };
};