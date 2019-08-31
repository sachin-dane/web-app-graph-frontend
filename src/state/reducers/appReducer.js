import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESSFULL,
    LOGIN_FAILURE
} from '../../constants/actions';

const appReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUESTED:
            return { ...state, isLoading: true };

        case LOGIN_SUCCESSFULL:
            return {
                ...state,
                isLoading: false,
                user: { ...action.payload }
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                user: {},
                error: { ...action.payload }
            };

        default:
            return state;
    }
};

export default appReducer;
