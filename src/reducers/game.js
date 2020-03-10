import { actionType } from '../actions/game';

export default (state = {}, action) => {
    switch (action.type) {
        case actionType.CREATE_LOBBY:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};
