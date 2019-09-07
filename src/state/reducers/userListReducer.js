import { combineReducers } from 'redux';
import users from '../../static/seed/users.json'
import {
    FETCH_USER_LIST_REQUESTED,
    FETCH_USER_LIST_SUCCESSFULL,
    FETCH_USER_LIST_FAILURE,
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


const userListReducer = (state = {}, action) => {

    switch (action.type) {
        case FETCH_USER_LIST_REQUESTED:
            return {
                ...state,
                userList: {
                    isLoading: true,
                    userList: [],
                },
            };

        case FETCH_USER_LIST_SUCCESSFULL:
            console.log('user list reducer ==>>', action.payload)
            return {
                ...state,
                userList: {
                    isLoading: false,
                    userList: action.payload,
                },
            };

        case FETCH_USER_LIST_FAILURE:
            return {
                ...state,
                userList: {
                    isLoading: false,
                    userList: [],
                }
            };

        case DELETE_USER_REQUESTED:
            return {
                ...state,
                deleteUser: {
                    isLoading: true,
                    isUserDeleted: false
                }
            };

        case DELETE_USER_SUCCESSFUL:
            console.log('user list reducer ==>>', action.payload)
            return {
                ...state,
                deleteUser: {
                    isLoading: false,
                    isUserDeleted: true
                }
            };

        case DELETE_USER_FAILURE:
            return {
                ...state,
                deleteUser: {
                    isLoading: false,
                    isUserDeleted: true
                }
            };

        case CHECK_USER_EXIST_REQUEST:
            return {
                ...state,
                checkUser: {
                    isUserExist: false
                }
            };

        case CHECK_USER_EXIST_SUCCESSFUL:
            console.log('user list reducer ==>>', action.payload)
            return {
                ...state,
                checkUser: {
                    isUserExist: true
                }
            };

        case CHECK_USER_EXIST_FAILURE:
            return {
                ...state,
                checkUser: {
                    isUserExist: false
                }
            };
        case RESET_CHECK_USER_EXIST:
            return {
                ...state,
                checkUser: {
                    isUserExist: false
                }
            };

        case FORGOT_PASSWORD_REQUESST:
            return {
                ...state,
                forgotPassword: {
                    isPasswordUpdated: false
                }
            };

        case FORGOT_PASSWORD_SUCCESSFUL:
            console.log('user list reducer ==>>', action.payload)
            return {
                ...state,
                forgotPassword: {
                    isPasswordUpdated: true
                }
            };

        case FORGOT_PASSWORD_FAILURE:
            return {
                ...state,
                forgotPassword: {
                    isPasswordUpdated: false
                }
            };
        case RESET_FORGOT_PASSWORD:
            return {
                ...state,
                forgotPassword: {
                    isPasswordUpdated: false
                }
            };

        default:
            return state;
    }
};

export default combineReducers({
    userListData: userListReducer
});
