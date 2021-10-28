const {Schema, model} = require("./connection")


// create schema
const BookSchema = new Schema ({
    title: String,
    author: String,
    year: Number,
    img : String,
    review: String,
    reviewAuthor: String
})

// create model
const Book = model("Book", BookSchema)

// export model
module.exports = Book