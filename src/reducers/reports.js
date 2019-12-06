import { actionType } from '../actions/account';

export default (state = {}, action) => {
    switch (action.type) {
        case actionType.CREATE_REPORT:
            return state;

        default:
            return state;
    }
};
