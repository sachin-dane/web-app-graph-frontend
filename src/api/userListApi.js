import ApiUtils from './apiUtilsNew';
const rootUrl = window._env_.REACT_APP_API_ROOT;

const fetchUserListRequestAsync = async data => {
    try {
        console.log('Data==>>', data)
        const response = await ApiUtils.get(`${rootUrl}/users`, data);
        console.log('response==>>', response)
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }

    } catch (error) {
        console.log('error==>>', error)
        return { error: { ...error.data } };
    }
};

const activateUser = async data => {
    try {
        console.log('Data==>>', data)
        const response = await ApiUtils.put(`${rootUrl}/users`, data);
        console.log('response==>>', response)
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }

    } catch (error) {
        console.log('error==>>', error)
        return { error: { ...error.data } };
    }
};


const deleteUser = async data => {
    try {
        console.log('Data==>>', data)
        const response = await ApiUtils.del(`${rootUrl}/users/${data}`);
        console.log('response==>>', response)
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }

    } catch (error) {
        console.log('error==>>', error)
        return { error: { ...error.data } };
    }
};

const checkUserExist = async data => {
    console.log('rootUrl==>>', rootUrl)
    try {
        console.log('Data==>>', data)
        const response = await ApiUtils.post(`${rootUrl}/users/check`, data);
        console.log('response login api ==>>', response)
        if (response.data.status_code === 200) {
            return { response };
        } else {
            console.log()
            return { response };
        }

    } catch (error) {
        return { error: { ...error.data } };
    }
};

const forgotPassword = async data => {
    console.log('rootUrl==>>', rootUrl)
    try {
        console.log('Data==>>', data)
        const response = await ApiUtils.put(`${rootUrl}/users/password/update`, data);
        console.log('response login api ==>>', response)
        if (response.data.status_code === 200) {
            return { response };
        } else {
            console.log()
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
