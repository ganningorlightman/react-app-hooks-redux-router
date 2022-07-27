import { ADD_COUNT } from './constants';

export const initialState = {
    count: 0,
};

export const gameReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return {
                ...state,
                count:  state.count + action.count
            }
        default:
            return state
    }
}
