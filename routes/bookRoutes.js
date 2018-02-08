const path = require("path");
const router = require("express").Router();
/* const controller = require("../controllers/controller"); */
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireStorage = require('../middlewares/requireStorage');

const Book = mongoose.model('books');

module.exports = app => {

  app.get('/api/books/user', requireLogin, async (req, res) => {
    const books = await Book.find({ _user: req.user.id }).select({
      pages: false
    });

    res.send(books);
  });

  app.get('/api/books/all', async (req, res) => {
    const booksAll = await Book.find({});
    
    res.send(booksAll);
  });

  app.get('/api/books/sports', async (req, res) => {
    const booksSports = await Book.find({ genre: 'sports' }).select({
      pages: false
    });

    res.send(booksSports);
  });

  app.get('/api/books/travel', async (req, res) => {
    const booksTravel = await Book.find({ genre: 'travel' }).select({
      pages: false
    });

    res.send(booksTravel);
  });

  app.get('/api/books/history', async (req, res) => {
    const booksHistory = await Book.find({ genre: 'history' }).select({
      pages: false
    });

    res.send(booksHistory);
  });

  app.get('/api/books/culture', async (req, res) => {
    const booksCulture = await Book.find({ genre: 'culture' }).select({
      pages: false
    });

    res.send(booksCulture);
  });

  app.get('/api/books/music', async (req, res) => {
    const booksMusic = await Book.find({ genre: 'music' }).select({
      pages: false
    });

    res.send(booksMusic);
  });

  app.get('/api/books/education', async (req, res) => {
    const booksEducation = await Book.find({ genre: 'education' }).select({
      pages: false
    });

    res.send(booksEducation);
  });

  app.get('/api/books/fashion', async (req, res) => {
    const booksFashion = await Book.find({ genre: 'fashion' }).select({
      pages: false
    });

    res.send(booksFashion);
  });

  app.get('/api/books/family', async (req, res) => {
    const booksFamily = await Book.find({ genre: 'family' }).select({
      pages: false
    });

    res.send(booksFamily);
  });

  app.get('/api/books/cinema', async (req, res) => {
    const booksCinema = await Book.find({ genre: 'cinema' }).select({
      pages: false
    });

    res.send(booksCinema);
  });

  //api/books/:userid

  //api/books/:bookid

};
