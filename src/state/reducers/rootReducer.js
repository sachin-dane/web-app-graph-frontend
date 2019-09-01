import { combineReducers } from 'redux';

import appReducer from './appReducer';
import dashboardReducer from './dashboardReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import userListReducer from './userListReducer'
import sitesListReducer from './siteListReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    app: appReducer,
    login: loginReducer,
    signup: signupReducer,
    userList: userListReducer,
    siteList: sitesListReducer
});

export default rootReducer;
