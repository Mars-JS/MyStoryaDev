import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import booksReducer from './booksReducer';
import pagesReducer from './pagesReducer';
import booksUserReducer from './booksUserReducer';

export default combineReducers ({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer,
    books: booksReducer,
    pages: pagesReducer,
    booksuser: booksUserReducer
});