import express from "express";

import { getBooks, createBook, deleteBook } from "../controllers/books.js";


const router = express.Router();
//ROUTES
router.get("/", getBooks);//fetch all book
router.post("/", createBook);// add a book
router.delete("/:id", deleteBook); // delete a book

export default router