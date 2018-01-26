const mongoose = require('mongoose');
const {Schema} = mongoose;

const pageSchema = new Schema ({
    bookId: String,
    pageNumber: Number,
    body: String
});

module.exports = pageSchema;