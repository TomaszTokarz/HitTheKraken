import { actionType } from '../actions/account';

export default (state = {}, action) => {
    switch (action.type) {
        case actionType.LOG_IN:
            return {
                ...state,
                ...action.payload,
            };

        case actionType.LOG_OUT:
            return {};

        default:
            return state;
    }
};
