const initialState = {
    dashboard: {
        trends: {
            current: {
                isLoading: false
            },
            previous: {
                isLoading: false
            }
        },
        topRules: {
            isLoading: true
        },

        topUserActivities: [],

        logsHistogram: {
            isLoading: true
        },

        userAgent: {
            isLoading: true
        },

        topSuccessfulLogins: {
            isLoading: true
        },

        totalLogVolume: {
            isLoading: true
        },
        totalLogVolumeByType: {
            isLoading: true
        },
        topFailedLogins: {
            isLoading: true
        },
        firewallSources: {
            isLoading: true
        },
        cdnRequestSources: {
            isLoading: true
        },
        threatSources: {
            isLoading: true
        },
        alertsSummaryBySeverity: {
            isLoading: true
        },
        alertsSummaryByCategory: {
            isLoading: true
        }
    }
};

export default initialState;
