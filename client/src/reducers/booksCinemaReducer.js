import { FETCH_BOOKS_CINEMA } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS_CINEMA:
            return action.payload;
        default:
            return state;
    }
}
