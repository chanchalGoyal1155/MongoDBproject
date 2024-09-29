import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
    "title": String,
    "isbn": String,
    "publicationDate": String,
    "genres": String,
    "authorIds": String, // References to Authors
    "availableCopies": Number,
    "totalCopies": Number
  }
)

const BooksModel = mongoose.model("book", BooksSchema);
export default BooksModel