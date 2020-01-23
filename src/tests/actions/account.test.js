import { logIn, logOut, actionType } from '../../actions/account';

test('consist corrent action types definition', () => {
    expect(actionType).toEqual({
        LOG_IN: 'LOG_IN',
        LOG_OUT: 'LOG_OUT',
    });
});

test('creates correct action for logIn', () => {
    const action = logIn('displayName', 'email', 'uid');

    expect(action).toEqual({
        type: 'LOG_IN',
        payload: {
            displayName: 'displayName',
            email: 'email',
            uid: 'uid',
        },
    });
});

test('creates correct action for logOut', () => {
    const action = logOut('displayName', 'email', 'uid');

    expect(action).toEqual({
        type: 'LOG_OUT',
        payload: {},
    });
});
