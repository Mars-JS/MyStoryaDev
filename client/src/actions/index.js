import axios from 'axios';
import { FETCH_USER, FETCH_BOOKS_USER, FETCH_SURVEYS, FETCH_BOOKS, FETCH_PAGES, FETCH_ONE_BOOK } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch ({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe/email', token);

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const handleTokenBooks = token => async dispatch => {
    const res = await axios.post('/api/stripe/storage', token);

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitBook = (values, history) => async dispatch => {
    const res = await axios.post('/api/books', values);

    history.push('/books');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBooks = () => async dispatch => {
    const res = await axios.get('/api/books');

    dispatch({ type: FETCH_BOOKS, payload: res.data });
};

export const fetchOneBook = () => async dispatch => {
    const res = await axios.get('/api/books/1');

    dispatch({ type: FETCH_ONE_BOOK, payload: res.data });
};

export const submitPage = (values, history) => async dispatch => {
    const res = await axios.post('/api/pages', values);

    history.push('/pages');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPages = () => async dispatch => {
    const res = await axios.get('/api/pages');

    dispatch({ type: FETCH_PAGES, payload: res.data });
};

export const fetchBooksUser = () => async dispatch => {
    const res = await axios.get('/api/books/user');

    dispatch({ type: FETCH_BOOKS_USER, payload: res.data });
};