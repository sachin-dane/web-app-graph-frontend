import { combineReducers } from 'redux';

import appReducer from './appReducer';
import dashboardReducer from './dashboardReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    app: appReducer,
    login: loginReducer,
    signup: signupReducer
});

export default rootReducer;
