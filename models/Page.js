const mongoose = require('mongoose');
const { Schema } = mongoose;

const pageSchema = new Schema ({
    chapter: Number,
    pageNumber: Number,
    body: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    _bookId: { type: Schema.Types.ObjectId, ref: 'Book' }
});

mongoose.model('pages', pageSchema);

module.exports = pageSchema;
