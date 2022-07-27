import { ADD_VALUE_TO_SCORE } from './constants';

export const addValueToScore = (name, value) => ({
    type: ADD_VALUE_TO_SCORE,
    name,
    value,
})
