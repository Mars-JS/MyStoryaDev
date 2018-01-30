const mongoose = require('mongoose');
const { Schema } = mongoose;

const pageSchema = new Schema ({
    bookId: String,
    pageNumber: Number,
    body: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }/* ,
    _bookId: { type: Schema.Types.ObjectId, ref: 'Book' }, */
});

module.exports = pageSchema;
