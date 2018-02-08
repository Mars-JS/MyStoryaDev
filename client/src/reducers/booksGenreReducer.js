import { FETCH_BOOKS_SPORTS, FETCH_BOOKS_TRAVEL, FETCH_BOOKS_HISTORY, FETCH_BOOKS_CULTURE, FETCH_BOOKS_MUSIC, FETCH_BOOKS_EDUCATION, FETCH_BOOKS_FASHION, FETCH_BOOKS_FAMILY, FETCH_BOOKS_CINEMA } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS_SPORTS:
            return action.payload;
        case FETCH_BOOKS_TRAVEL:
            return action.payload;
        case FETCH_BOOKS_HISTORY:
            return action.payload;
        case FETCH_BOOKS_CULTURE:
            return action.payload;
        case FETCH_BOOKS_MUSIC:
            return action.payload;
        case FETCH_BOOKS_EDUCATION:
            return action.payload;
        case FETCH_BOOKS_FASHION:
            return action.payload;
        case FETCH_BOOKS_FAMILY:
            return action.payload;
        case FETCH_BOOKS_CINEMA:
            return action.payload;
        default:
            return state;
    }
}
