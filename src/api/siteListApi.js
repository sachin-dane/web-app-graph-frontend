import ApiUtils from './apiUtilsNew';
const rootUrl = window._env_.REACT_APP_API_ROOT;

const fetchSitesListAsync = async data => {
    try {
        const response = await ApiUtils.get(`${rootUrl}/sites`, data);
        return { response };
    } catch (error) {
        return { error: { ...error.data } };
    }
};


const fetchUserSpecificSites = async data => {
    try {
        const response = await ApiUtils.get(`${rootUrl}/sites/users/${data.id}/${data.role_id}`, data);
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }
    } catch (error) {
        return { error: { ...error.data } };
    }
};

const fetchSitesById = async data => {
    try {
        const response = await ApiUtils.get(`${rootUrl}/sites/${data}`);

        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }
    } catch (error) {

        return { error: { ...error.data } };
    }
};

const assignSiteToUser = async data => {
    try {
        const response = await ApiUtils.put(`${rootUrl}/sites/assign/user`, data);
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }
    } catch (error) {
        return { error: { ...error.data } };
    }
};

const createSiteRequest = async data => {
    try {
        const response = await ApiUtils.post(`${rootUrl}/sites/create`, data);
        if (response.data.status_code === 200) {
            return { response };
        } else {
            return { error: { message: 'Somethig Went Wrong!' } }
        }
    } catch (error) {
        return { error: { ...error.data } };
    }
};

export default {
    fetchSitesListAsync,
    fetchUserSpecificSites,
    fetchSitesById,
    assignSiteToUser,
    createSiteRequest
};
