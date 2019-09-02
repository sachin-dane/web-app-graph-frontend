import { combineReducers } from 'redux';
import users from '../../static/seed/users.json'
import {
    FETCH_USER_LIST_REQUESTED,
    FETCH_USER_LIST_SUCCESSFULL,
    FETCH_USER_LIST_FAILURE,
} from '../../constants/actions'


const userListReducer = (state = {}, action) => {
    console.log('user list reducer ==>>', action.payload)
    switch (action.type) {
        case FETCH_USER_LIST_REQUESTED:
            return {
                ...state,
                isLoading: true,
                userList: []
            };

        case FETCH_USER_LIST_SUCCESSFULL:
            return {
                ...state,
                isLoading: false,
                userList: action.payload
            };

        case FETCH_USER_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                userList: users
            };

        default:
            return state;
    }
};

export default combineReducers({
    userListData: userListReducer
});
