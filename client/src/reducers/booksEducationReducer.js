import { FETCH_BOOKS_EDUCATION } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS_EDUCATION:
            return action.payload;
        default:
            return state;
    }
}
