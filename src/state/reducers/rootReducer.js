import { combineReducers } from 'redux';

import appReducer from './appReducer';
import dashboardReducer from './dashboardReducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    app: appReducer
});

export default rootReducer;
