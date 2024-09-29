import express from "express"
import BooksModel from "../models/books.js"

export function getBooks(request, response) { }

export async function createBook(request, response) {
    const newBook = new BooksModel(request.body)
    await newBook.save()
    response.send("Book Added")
}

export function deleteBook(request, response) { }

