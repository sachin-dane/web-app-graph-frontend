const initialState = {
    dashboard: {
        trends: {
            current: {
                isLoading: false
            },
            previous: {
                isLoading: false
            }
        }
    },
    login: {
        loginData: {
            isLoading: false,
            isError: false,
            data: [],
            userData: {},
        }
    },
    signup: {
        signupData: {
            isLoading: false,
            isError: false,
            data: [],
            isSignupSuccessful: false
        }
    },
    userList: {
        userListData: {
            isLoading: false,
            userList: []
        }
    },
    siteList: {
        sitesListData: {
            allSites: {
                isLoading: false,
                siteList: []
            },
            userSites: {
                isLoading: false,
                siteList: []
            },
            sitesById: {
                isLoading: false,
                siteList: []
            }
        },

    }
};

export default initialState;
