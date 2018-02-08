import { FETCH_BOOKS_MUSIC } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS_MUSIC:
            return action.payload;
        default:
            return state;
    }
}
