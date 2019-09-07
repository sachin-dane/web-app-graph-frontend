import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import userListReducer from './userListReducer'
import sitesListReducer from './siteListReducer'
import updateProfileReducer from './updateProfileReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    userList: userListReducer,
    siteList: sitesListReducer,
    updateProfile: updateProfileReducer
});

export default rootReducer;
