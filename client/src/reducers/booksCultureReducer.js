import { FETCH_BOOKS_CULTURE } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS_CULTURE:
            return action.payload;
        default:
            return state;
    }
}
