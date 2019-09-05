import { toast } from 'react-toastify';
import {
    SIGNUP_REQUESTED,
    SIGNUP_SUCCESSFULL,
    SIGNUP_FAILURE,
    RESET_SIGNUP
} from '../../constants/actions'

export const signupRequested = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: SIGNUP_REQUESTED,
        payload: data
    };
};

export const signupSuccessfull = data => {
    toast.info(`Hello, your signup is done and will be authorised by Admin within 24 hours via mail/call. Thanks for your patience`)

    return {
        type: SIGNUP_SUCCESSFULL,
        payload: data
    };
};

export const signupFailure = data => {
    toast.error(`${data.message.message}`)
    return {
        type: SIGNUP_FAILURE,
        payload: data
    };
};
export const resetSignup = data => {
    return {
        type: RESET_SIGNUP,
        payload: data
    };
};

