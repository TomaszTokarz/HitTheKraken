export const logIn = (displayName, email, uid) => ({
    type: 'LOG_IN',
    account: {
        displayName,
        email,
        uid,
    },
});

export const logOut = () => ({
    type: 'LOG_OUT',
    account: {},
});
