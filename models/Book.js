const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = mongoose.Schema({
  title: { type: mongoose.Schema.Types.String, required: true },
  authors: [
    {
      type: mongoose.Schema.Types.String,
    },
  ],
  description: {type: mongoose.Schema.Types.String},
  thumbnail: {type: mongoose.Schema.Types.String},
  link: {type: mongoose.Schema.Types.String},
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;