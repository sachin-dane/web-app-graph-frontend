import ApiUtils from './apiUtilsNew';
const rootUrl = window._env_.REACT_APP_API_ROOT;

const fetchUserListRequestAsync = async data => {
    try {
        const response = await ApiUtils.get(`${rootUrl}/users`, data);
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }

    } catch (error) {
        return { error: { ...error.data } };
    }
};

const activateUser = async data => {
    try {
        const response = await ApiUtils.put(`${rootUrl}/users`, data);
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }

    } catch (error) {
        return { error: { ...error.data } };
    }
};


const deleteUser = async data => {
    try {
        const response = await ApiUtils.del(`${rootUrl}/users/${data}`);
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }

    } catch (error) {
        return { error: { ...error.data } };
    }
};

const checkUserExist = async data => {
    try {
        const response = await ApiUtils.post(`${rootUrl}/users/check`, data);
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { response };
        }

    } catch (error) {
        return { error: { ...error.data } };
    }
};

const forgotPassword = async data => {
    try {
        const response = await ApiUtils.put(`${rootUrl}/users/password/update`, data);
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { response };
        }

    } catch (error) {
        return { error: { ...error.data } };
    }
};

export default {
    fetchUserListRequestAsync,
    activateUser,
    deleteUser,
    checkUserExist,
    forgotPassword
};
