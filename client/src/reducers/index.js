import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import booksReducer from './booksReducer';
import pagesReducer from './pagesReducer';
import booksUserReducer from './booksUserReducer';
import booksGenreReducer from './booksGenreReducer';
import booksSportsReducer from './booksSportsReducer';
import booksCinemaReducer from './booksCinemaReducer';
import booksCultureReducer from './booksCultureReducer';
import booksEducationReducer from './booksEducationReducer';
import booksFamilyReducer from './booksFamilyReducer';
import booksFashionReducer from './booksFashionReducer';
import booksHistoryReducer from './booksHistoryReducer';
import booksMusicReducer from './booksMusicReducer';
import booksTravelReducer from './booksTravelReducer';

export default combineReducers ({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer,
    books: booksReducer,
    pages: pagesReducer,
    booksuser: booksUserReducer,
    booksgenre: booksGenreReducer,
    bookssports: booksSportsReducer,
    bookscinema: booksCinemaReducer,
    booksculture: booksCultureReducer,
    bookseducation: booksEducationReducer,
    booksfamily: booksFamilyReducer,
    booksfashion: booksFashionReducer,
    bookshistory: booksHistoryReducer,
    booksmusic: booksMusicReducer,
    bookstravel: booksTravelReducer,
});