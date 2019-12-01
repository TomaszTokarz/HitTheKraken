export const createReport = (payload = {}) => ({
    type: actionType.CREATE_REPORT,
    payload,
});

export const actionType = {
    CREATE_REPORT: 'CREATE_REPORT',
};
