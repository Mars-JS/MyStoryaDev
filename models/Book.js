/* const mongoose = require("mongoose");
const { Schema } = mongoose;
const PageSchema = require('./Page');

const bookSchema = new Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    body: { type: String, required: true },
    bookid: { type: Number, required: true },
    userid: { type: Number, required: true },
    pages: [pageSchema],
    show: true,
    deleted: false,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateCreated: Date

});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
 */