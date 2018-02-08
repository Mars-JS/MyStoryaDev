import { FETCH_BOOKS_TRAVEL } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS_TRAVEL:
            return action.payload;
        default:
            return state;
    }
}
