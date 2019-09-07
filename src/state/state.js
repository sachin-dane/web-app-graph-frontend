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
            userList: {
                isLoading: false,
                userList: [],
            },
            deleteUser: {
                isLoading: false,
                isUserDeleted: false
            },
            checkUser: {
                isUserExist: false
            },
            forgotPassword: {
                isPasswordUpdated: false
            }
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
