const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireStorage = require('../middlewares/requireStorage');

const Book = mongoose.model('books');

module.exports = app => {

    app.get('/api/books', requireLogin, async (req, res) => {
        const books = await Book.find({ _user: req.user.id }).select({
            pages: false
        });

        res.send(books);
    });
    
    app.post('/api/books', requireLogin, requireStorage, async (req, res) => {
        const { title, bookid, genre, cover, author, backCover, synopsis, pages, pageCount } = req.body;

        const book = new Book({
            title,
            bookid,
            genre,
            cover,
            author,
            backCover,
            synopsis,
            pages: pages.split(',').map(page => ({ page: page.trim() })),
            pageCount: 0,
            _user: req.user.id,
            dateCreated: Date.now(),
            show: { type: Boolean, default: true },
            deleted: { type: Boolean, default: false},
            keyWords: [String]
        });
        //save to db and subtract
        try {
            await book.save();
            req.user.booksRemain -= 1;
            const user = await req.user.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
};