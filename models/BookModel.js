const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  body: { type: String, required: true },
  views: { type: Number },
  bookid: { type: Number, required: true },
  userid: { type: Number, required: true }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
