# Project 2
#### By Fran Brauning

## Project Summary

I am building a personal book database that shows the books I own and want to read and to which I can add new books I have purchased

## Models

Model: Book

- title: String
- author: String
- year: Number
- img : String

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /books | get | get all books (index)|
| /books/:id | get | get a particular book (show)|
| /books/new | get | form to add a new book (new)|
| /books | post | adds new book to index (create)|
| /books/:id/edit| get | form to edit a book (edit)|
| /books/:id | put | updates book info (update)|
| books/:id | delete | deletes a book (destroy)|

## User Stories

- User can visit homepage and see all books currently owned.
- User can click on a specific book and be taken to a page with all the information about the book.
- User can click on an "add" button to add a new book.
- User can click on a "delete" button to remove a book they have finished reading 
- User can click on an "edit" button to edit any information about a particular book, and include notes.

## Challenges



## List of Technologies

- JS
- CSS
- HTML
- express
- mongoose

