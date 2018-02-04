const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireStorage = require('../middlewares/requireStorage');

const Page = mongoose.model('pages');

module.exports = app => {
    app.get('/api/pages', requireLogin, async (req, res) => {
        const pages = await Page.find({ _user: req.user.id }).select({
            
        });

        res.send(pages);
    });

    app.post('/api/pages', requireLogin, requireStorage, async (req, res) => {
        const { chapter, pageNumber, body } = req.body;

        const page = new Page({
            chapter,
            pageNumber,
            body,
            _user: req.user.id,
            /* _book: this.props.bookid */
        });
        //save to db and subtract
        try {
            await page.save();
            /* req.user.pagesRemain -= 1; */
            const user = await req.user.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
};
