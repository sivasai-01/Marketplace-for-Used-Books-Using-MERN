const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  link: { type: String, required: true },
  authors: { type: [ String  ] },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
