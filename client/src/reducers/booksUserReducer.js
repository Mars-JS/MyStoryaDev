import { FETCH_BOOKS_USER } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS_USER:
            return action.payload;
        default:
            return state;
    }
}