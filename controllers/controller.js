const db = require("../models/BookModel");

module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .find(bookid:req.params.bookid)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    db.Book
      .find(userid:req.params.userid)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByGenre: function(req, res) {
    db.Book
      .find(genre:req.params.genre)
      .sort({views:1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByViews: function(req, res) {
    db.Book
      .find(req.query)
      .sort({views:1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
