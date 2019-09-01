import {
    FETCH_USER_LIST_REQUESTED,
    FETCH_USER_LIST_SUCCESSFULL,
    FETCH_USER_LIST_FAILURE,
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