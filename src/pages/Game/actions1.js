import { ADD_COUNT } from './constants';

export const addCountAction = count => {
    return ({
        type: ADD_COUNT,
        count
    })
}