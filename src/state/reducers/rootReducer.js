import { combineReducers } from 'redux';

import appReducer from './appReducer';
import dashboardReducer from './dashboardReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import userListReducer from './userListReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    app: appReducer,
    login: loginReducer,
    signup: signupReducer,
    userList: userListReducer
});

export default rootReducer;
