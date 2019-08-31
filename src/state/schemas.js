/* eslint-disable no-use-before-define */
import { schema } from 'normalizr';

// For single category
export const category = new schema.Entity('categories');

// For list of categories
export const categoryList = [category];

// For single organization
export const organization = new schema.Entity('organizations');

// For list of organizations
export const organizationList = [organization];

// For single attachment
export const attachment = new schema.Entity('attachments');

// For list of attachments
export const attachmentList = [attachment];

// For single rule
export const rule = new schema.Entity('rules', {
    categories: categoryList,
    organizations: organizationList
});

// For list of rules
export const ruleList = [rule];

export const rulesResponse = new schema.Entity('rulesResponse', {
    rules: ruleList
});

// For single report
export const report = new schema.Entity('reports', {
    categories: categoryList,
    // attachmentList,
    organizations: organizationList
});

// For list of reports
export const reportList = [report];

// For single incident
export const incident = new schema.Entity('incidents', {
    categoryList,
    organization,
    attachmentList
});

// For list of incidents
export const incidentsList = [incident];

// For single user reference
export const userRef = new schema.Entity('userRefs');

// For list of user references

// For single user
export const user = new schema.Entity('users', {
    created_by: userRef,
    modified_by: userRef,
    organizationList
});

// For list of user references
export const userList = [user];

// For single incident summary
export const incidentSummary = new schema.Entity('incidentSummary', {
    categories: categoryList
});

// For list of incidents summaries
export const incidentsSummaryList = [incidentSummary];
