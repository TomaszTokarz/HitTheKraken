import accountReducer from '../../reducers/account';

test('should clear empty object on logOut action', function() {
    const state = accountReducer(undefined, {
        type: 'LOG_OUT',
    });

    expect(state).toEqual({});
});

test('should set payload to store object on logIn action', function() {
    const payload = {
        displayName: 'displayName',
        email: 'email',
        uid: 'uid',
    };

    const state = accountReducer(undefined, {
        type: 'LOG_IN',
        payload: payload,
    });

    expect(state).toEqual(payload);
});
