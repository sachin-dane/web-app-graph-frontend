import { all } from 'redux-saga/effects';
import dashboardSaga from './dashboardSaga';
import loginSaga from './loginSaga';
import signupSaga from './signupSaga'


export default function* rootSaga() {
    yield all([
        loginSaga(),
        signupSaga(),
        dashboardSaga(),
    ]);
}