const requireLogin = require('../middlewares/requireLogin');
const requireStorage = require('../middlewares/requireStorage');

module.exports = app => {
    app.post('/api/books', requireLogin, requireStorage, (req, res) => {

    });
};