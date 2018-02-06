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
};
