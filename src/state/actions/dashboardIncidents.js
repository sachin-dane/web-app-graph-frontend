import {
    DASHBOARD_INCIDENT_SUMMARY_REQUESTED,
    DASHBOARD_INCIDENT_SUMMARY_SUCCESSFUL,
    DASHBOARD_INCIDENT_SUMMARY_FAILURE,
    DASHBOARD_INCIDENT_TOP_RULES_REQUESTED,
    DASHBOARD_INCIDENT_TOP_RULES_SUCCESSFUL,
    DASHBOARD_INCIDENT_TOP_RULES_FAILURE,
    DASHBOARD_LOGS_VOLUME_HISTOGRAM_REQUESTED,
    DASHBOARD_LOGS_VOLUME_HISTOGRAM_FAILURE,
    DASHBOARD_LOGS_VOLUME_HISTOGRAM_SUCCESSFUL,
    DASHBOARD_USER_AGENT_REQUESTED,
    DASHBOARD_USER_AGENT_SUCCESSFUL,
    DASHBOARD_USER_AGENT_FAILURE,
    DASHBOARD_TOP_SUCCESSFUL_LOGINS_REQUESTED,
    DASHBOARD_TOP_SUCCESSFUL_LOGINS_SUCCESSFUL,
    DASHBOARD_TOP_SUCCESSFUL_LOGINS_FAILURE,
    DASHBOARD_TOP_USER_ACTIVITIES_REQUESTED,
    DASHBOARD_TOP_USER_ACTIVITIES_SUCCESSFUL,
    DASHBOARD_TOP_USER_ACTIVITIES_FAILURE,
    DASHBOARD_TOTAL_LOG_VOLUME_REQUESTED,
    DASHBOARD_TOTAL_LOG_VOLUME_SUCCESSFUL,
    DASHBOARD_TOTAL_LOG_VOLUME_FAILURE,
    DASHBOARD_TOP_FAILED_LOGINS_REQUESTED,
    DASHBOARD_TOP_FAILED_LOGINS_SUCCESSFUL,
    DASHBOARD_TOP_FAILED_LOGINS_FAILURE,
    DASHBOARD_FIREWALL_SOURCES_REQUESTED,
    DASHBOARD_FIREWALL_SOURCES_SUCCESSFUL,
    DASHBOARD_FIREWALL_SOURCES_FAILURE,
    DASHBOARD_CDN_REQUEST_SOURCES_REQUESTED,
    DASHBOARD_CDN_REQUEST_SOURCES_SUCCESSFUL,
    DASHBOARD_CDN_REQUEST_SOURCES_FAILURE,
    DASHBOARD_THREAT_SOURCES_REQUESTED,
    DASHBOARD_THREAT_SOURCES_SUCCESSFUL,
    DASHBOARD_THREAT_SOURCES_FAILURE,
    DASHBOARD_TOTAL_LOG_VOLUME_BY_TYPE_REQUESTED,
    DASHBOARD_TOTAL_LOG_VOLUME_BY_TYPE_SUCCESSFUL,
    DASHBOARD_TOTAL_LOG_VOLUME_BY_TYPE_FAILURE,
    DASHBOARD_ALERTS_SUMMARY_BY_SEVERITY_REQUESTED,
    DASHBOARD_ALERTS_SUMMARY_BY_SEVERITY_SUCCESSFUL,
    DASHBOARD_ALERTS_SUMMARY_BY_SEVERITY_FAILURE,
    DASHBOARD_ALERTS_SUMMARY_BY_CATEGORY_REQUESTED,
    DASHBOARD_ALERTS_SUMMARY_BY_CATEGORY_SUCCESSFUL,
    DASHBOARD_ALERTS_SUMMARY_BY_CATEGORY_FAILURE
} from '../../constants/actions';

export const fetchIncidentsSummaryRequested = data => {
    return {
        type: DASHBOARD_INCIDENT_SUMMARY_REQUESTED,
        payload: data
    };
};

export const fetchIncidentsSummarySuccessful = data => {
    return {
        type: DASHBOARD_INCIDENT_SUMMARY_SUCCESSFUL,
        payload: data
    };
};

export const fetchIncidentsSummaryFailure = data => {
    return {
        type: DASHBOARD_INCIDENT_SUMMARY_FAILURE,
        payload: data
    };
};

export const fetchTopIncidentsRulesRequested = data => {
    return {
        type: DASHBOARD_INCIDENT_TOP_RULES_REQUESTED,
        payload: data
    };
};

export const fetchTopIncidentsRulesSuccessful = data => {
    return {
        type: DASHBOARD_INCIDENT_TOP_RULES_SUCCESSFUL,
        payload: data
    };
};

export const fetchTopIncidentsRulesFailure = data => {
    return {
        type: DASHBOARD_INCIDENT_TOP_RULES_FAILURE,
        payload: data
    };
};

export const fetchLogsHistogramRequested = data => {
    return {
        type: DASHBOARD_LOGS_VOLUME_HISTOGRAM_REQUESTED,
        payload: data
    };
};

export const fetchTopUserActivitiesRequested = data => {
    return {
        type: DASHBOARD_TOP_USER_ACTIVITIES_REQUESTED,
        payload: data
    };
};

export const fetchLogsHistogramSuccessful = data => {
    return {
        type: DASHBOARD_LOGS_VOLUME_HISTOGRAM_SUCCESSFUL,
        payload: data
    };
};

export const fetchTopUserActivitiesSuccessful = data => {
    return {
        type: DASHBOARD_TOP_USER_ACTIVITIES_SUCCESSFUL,
        payload: data
    };
};

export const fetchLogsHistogramFailure = data => {
    return {
        type: DASHBOARD_LOGS_VOLUME_HISTOGRAM_FAILURE,
        payload: data
    };
};

export const fetchTopUserActivitiesFailure = data => {
    return {
        type: DASHBOARD_TOP_USER_ACTIVITIES_FAILURE,
        payload: data
    };
};

export const fetchUserAgentRequested = data => {
    return {
        type: DASHBOARD_USER_AGENT_REQUESTED,
        payload: data
    };
};

export const fetchTotalLogVolumeRequested = data => {
    return {
        type: DASHBOARD_TOTAL_LOG_VOLUME_REQUESTED,
        payload: data
    };
};

export const fetchUserAgentSuccessful = data => {
    return {
        type: DASHBOARD_USER_AGENT_SUCCESSFUL,
        payload: data
    };
};

export const fetchTotalLogVolumeSuccessful = data => {
    return {
        type: DASHBOARD_TOTAL_LOG_VOLUME_SUCCESSFUL,
        payload: data
    };
};

export const fetchUserAgentFailure = data => {
    return {
        type: DASHBOARD_USER_AGENT_FAILURE,
        payload: data
    };
};

export const fetchTotalLogVolumeFailure = data => {
    return {
        type: DASHBOARD_TOTAL_LOG_VOLUME_FAILURE,
        payload: data
    };
};

export const fetchTopSuccessfulLoginsRequested = data => {
    return {
        type: DASHBOARD_TOP_SUCCESSFUL_LOGINS_REQUESTED,
        payload: data
    };
};

export const fetchTopFailedLoginsRequested = data => {
    return {
        type: DASHBOARD_TOP_FAILED_LOGINS_REQUESTED,
        payload: data
    };
};

export const fetchTopSuccessfulLoginsSuccessful = data => {
    return {
        type: DASHBOARD_TOP_SUCCESSFUL_LOGINS_SUCCESSFUL,
        payload: data
    };
};

export const fetchTopSuccessfulLoginsFailure = data => {
    return {
        type: DASHBOARD_TOP_SUCCESSFUL_LOGINS_FAILURE,
        payload: data
    };
};

export const fetchTopFailedLoginsSuccessful = data => {
    return {
        type: DASHBOARD_TOP_FAILED_LOGINS_SUCCESSFUL,
        payload: data
    };
};

export const fetchTopFailedLoginsFailure = data => {
    return {
        type: DASHBOARD_TOP_FAILED_LOGINS_FAILURE,
        payload: data
    };
};

export const fetchFirewallSourcesRequested = data => {
    return {
        type: DASHBOARD_FIREWALL_SOURCES_REQUESTED,
        payload: data
    };
};

export const fetchFirewallSourcesSuccessful = data => {
    return {
        type: DASHBOARD_FIREWALL_SOURCES_SUCCESSFUL,
        payload: data
    };
};

export const fetchFirewallSourcesFailure = data => {
    return {
        type: DASHBOARD_FIREWALL_SOURCES_FAILURE,
        payload: data
    };
};

export const fetchCdnRequestSourcesRequested = data => {
    return {
        type: DASHBOARD_CDN_REQUEST_SOURCES_REQUESTED,
        payload: data
    };
};

export const fetchCdnRequestSourcesSuccessful = data => {
    return {
        type: DASHBOARD_CDN_REQUEST_SOURCES_SUCCESSFUL,
        payload: data
    };
};

export const fetchCdnRequestSourcesFailure = data => {
    return {
        type: DASHBOARD_CDN_REQUEST_SOURCES_FAILURE,
        payload: data
    };
};

export const fetchThreatSourcesRequested = data => {
    return {
        type: DASHBOARD_THREAT_SOURCES_REQUESTED,
        payload: data
    };
};

export const fetchThreatSourcesSuccessful = data => {
    return {
        type: DASHBOARD_THREAT_SOURCES_SUCCESSFUL,
        payload: data
    };
};

export const fetchRhreatSourcesFailure = data => {
    return {
        type: DASHBOARD_THREAT_SOURCES_FAILURE,
        payload: data
    };
};

export const fetchTotalLogVolumeByTypeRequested = data => {
    return {
        type: DASHBOARD_TOTAL_LOG_VOLUME_BY_TYPE_REQUESTED,
        payload: data
    };
};

export const fetchTotalLogVolumeByTypeSuccessful = data => {
    return {
        type: DASHBOARD_TOTAL_LOG_VOLUME_BY_TYPE_SUCCESSFUL,
        payload: data
    };
};

export const fetchTotalLogVolumeByTypeFailure = data => {
    return {
        type: DASHBOARD_TOTAL_LOG_VOLUME_BY_TYPE_FAILURE,
        payload: data
    };
};

export const fetchAlertsSummaryBySeverityRequested = data => {
    return {
        type: DASHBOARD_ALERTS_SUMMARY_BY_SEVERITY_REQUESTED,
        payload: data
    };
};

export const fetchAlertsSummaryBySeveritySuccessful = data => {
    return {
        type: DASHBOARD_ALERTS_SUMMARY_BY_SEVERITY_SUCCESSFUL,
        payload: data
    };
};

export const fetchAlertsSummaryBySeverityFailure = data => {
    return {
        type: DASHBOARD_ALERTS_SUMMARY_BY_SEVERITY_FAILURE,
        payload: data
    };
};

export const fetchAlertsSummaryByCategoryRequested = data => {
    return {
        type: DASHBOARD_ALERTS_SUMMARY_BY_CATEGORY_REQUESTED,
        payload: data
    };
};

export const fetchAlertsSummaryByCategorySuccessful = data => {
    return {
        type: DASHBOARD_ALERTS_SUMMARY_BY_CATEGORY_SUCCESSFUL,
        payload: data
    };
};

export const fetchAlertsSummaryByCategoryFailure = data => {
    return {
        type: DASHBOARD_ALERTS_SUMMARY_BY_CATEGORY_FAILURE,
        payload: data
    };
};
