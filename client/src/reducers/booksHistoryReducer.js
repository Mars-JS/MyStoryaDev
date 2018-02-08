import { FETCH_BOOKS_HISTORY } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS_HISTORY:
            return action.payload;
        default:
            return state;
    }
}
