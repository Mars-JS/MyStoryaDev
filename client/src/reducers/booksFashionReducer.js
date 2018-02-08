import { FETCH_BOOKS_FASHION } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS_FASHION:
            return action.payload;
        default:
            return state;
    }
}
