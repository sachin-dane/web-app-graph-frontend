import { toast } from 'react-toastify';
import {
    FETCH_USER_LIST_REQUESTED,
    FETCH_USER_LIST_SUCCESSFULL,
    FETCH_USER_LIST_FAILURE,
    ACTIVATE_USER_REQUESTED,
    ACTIVATE_USER_SUCCESSFUL,
    ACTIVATE_USER_FAILURE,
    DELETE_USER_REQUESTED,
    DELETE_USER_SUCCESSFUL,
    DELETE_USER_FAILURE,
    CHECK_USER_EXIST_REQUEST,
    CHECK_USER_EXIST_SUCCESSFUL,
    CHECK_USER_EXIST_FAILURE,
    RESET_CHECK_USER_EXIST,
    FORGOT_PASSWORD_REQUESST,
    FORGOT_PASSWORD_SUCCESSFUL,
    FORGOT_PASSWORD_FAILURE,
    RESET_FORGOT_PASSWORD
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

export const deleteUserRequest = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: DELETE_USER_REQUESTED,
        payload: data
    };
};

export const deleteUserSuccessful = data => {
    toast.success(`User is deleted successfully.`)
    return {
        type: DELETE_USER_SUCCESSFUL,
        payload: data
    };
};

export const deleteUserFailure = data => {
    return {
        type: DELETE_USER_FAILURE,
        payload: data
    };
};


export const checkUserExist = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: CHECK_USER_EXIST_REQUEST,
        payload: data
    };
};

export const checkUserExistSuccess = data => {

    return {
        type: CHECK_USER_EXIST_SUCCESSFUL,
        payload: data
    };
};

export const checkUserExistFailure = data => {
    toast.error(`${data.message}`)
    return {
        type: CHECK_USER_EXIST_FAILURE,
        payload: data
    };
};


export const resetCheckUserState = data => {
    return {
        type: RESET_CHECK_USER_EXIST,
        payload: data
    };
};

export const forgotPasswordRequest = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: FORGOT_PASSWORD_REQUESST,
        payload: data
    };
};

export const forgotPasswordSuccess = data => {
    toast.success(`User is deleted successfully.`)
    return {
        type: FORGOT_PASSWORD_SUCCESSFUL,
        payload: data
    };
};

export const forgotPasswordFailure = data => {
    return {
        type: FORGOT_PASSWORD_FAILURE,
        payload: data
    };
};


export const resetForgotPassword = data => {
    return {
        type: RESET_FORGOT_PASSWORD,
        payload: data
    };
};






