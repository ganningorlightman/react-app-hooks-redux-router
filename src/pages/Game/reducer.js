import { ADD_VALUE_TO_SCORE } from './constants';

const gameReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_VALUE_TO_SCORE:
            return {
                ...state,
                ...(action.name ? { [action.name]: (state[action.name] || 0) + action.value } : {})
            }
        default:
            return state
    }
}

export default gameReducer;