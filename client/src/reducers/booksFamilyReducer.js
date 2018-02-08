import { FETCH_BOOKS_FAMILY } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS_FAMILY:
            return action.payload;
        default:
            return state;
    }
}
