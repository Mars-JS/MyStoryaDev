const mongoose = require('mongoose');
const { Schema } = mongoose;
const PageSchema = require('./Page')

const bookSchema = new Schema({
    title: { type: String, required: true },
    genre: [String],
    cover: String,
    synopis: String,
    author: String,
    backCover: String,
    bookid: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    show: { type: Boolean, default: true },
    dateCreated: Date,
    pages: [PageSchema],
    keyWords:[String],
    pageCount: Number
});

mongoose.model("books", bookSchema);
