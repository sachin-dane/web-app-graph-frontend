import { toast } from 'react-toastify';
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
    console.log('data==>>', data)
    return {
        type: LOGIN_SUCCESSFULL,
        payload: data
    };
};

export const loginFailure = data => {
    console.log('login reducer data==>>', data)
    toast.error(`${data.message}`);
    return {
        type: LOGIN_FAILURE,
        payload: data
    };
};