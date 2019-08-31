import { normalize } from 'normalizr';
import apiUtils from './apiUtils';
import apiUtilsNew from './apiUtilsNew';
import { incidentsSummaryList } from '../state/schemas';

// eslint-disable-next-line no-underscore-dangle
const rootUrl = window._env_.REACT_APP_API_ROOT;

const incidentsSummaryListNormalizer = response => {
    return normalize(response, incidentsSummaryList);
};

const fetchIncidentsSummary = async param => {
    const queryString = apiUtils.mapObjectToQueryString(param);

    try {
        const response = await apiUtils.get(
            `${rootUrl}/rules/incidents/summary?${queryString}`
        );
        return incidentsSummaryListNormalizer(response.rules);
    } catch (error) {
        return { error };
    }
};

const fetchIncidentsTopRules = async param => {
    const queryString = apiUtils.mapObjectToQueryString(param);

    try {
        const response = await apiUtils.get(
            `${rootUrl}/rules/incidents/summary?${queryString}`
        );

        return incidentsSummaryListNormalizer(response.rules);
    } catch (error) {
        return { error };
    }
};

// This method uses the JDBC endpoint to query logs
const fetchLogsSummaryForDashboard = async param => {
    try {
        const response = await apiUtils.post(`${rootUrl}/dashboard`, {
            query: param.query
        });

        if (response.body && response.body.logs && response.body.logs.length) {
            return { response: { logs: response.body.logs } };
        }
        return { response: { logs: [] } };
    } catch (error) {
        return {
            error: {
                ...error.data
            }
        };
    }
};

// The method will get alerts data required for charts on the dashboard
const fetchAlertsSummary = async param => {
    const queryString = apiUtils.mapObjectToQueryString(param);
    try {
        const response = await apiUtilsNew.get(
            `dashboard/alert?${queryString}`
        );
        return { response: response.data };
    } catch (error) {
        return {
            error: {
                ...error.data
            }
        };
    }
};

export default {
    fetchIncidentsSummary,
    fetchIncidentsTopRules,
    fetchLogsSummaryForDashboard,
    fetchAlertsSummary
};
