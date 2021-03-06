import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import signupSaga from './signupSaga'
import userListSaga from './userListSaga'
import siteListSaga from './siteListSaga'
import profileUpdateSaga from './updateProfileSaga'
export default function* rootSaga() {
    yield all([
        loginSaga(),
        signupSaga(),
        userListSaga(),
        siteListSaga(),
        profileUpdateSaga()
    ]);
}