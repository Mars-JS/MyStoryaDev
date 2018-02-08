import { FETCH_BOOKS_SPORTS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS_SPORTS:
            return action.payload;
        default:
            return state;
    }
}
