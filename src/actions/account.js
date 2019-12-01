export const logIn = (displayName, email, uid) => ({
    type: actionType.LOG_IN,
    payload: {
        displayName,
        email,
        uid,
    },
});

export const logOut = () => ({
    type: actionType.LOG_OUT,
    payload: {},
});

export const actionType = {
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT',
};
