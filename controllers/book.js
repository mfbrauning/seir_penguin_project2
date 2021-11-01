// dependencies
const { application } = require("express")
const express = require("express")
const Book = require("../models/book")
//router
const router = express.Router()

// routes



// index route
router.get("/", (req, res) => {
    Book.find({})
    .then((books) => {
        res.render("books/index.liquid", {books})
    })
})

router.get("/read", (req,res) => {
    res.render("books/read")
})


// new route
router.get("/new", (req, res) => {
    res.render("books/new.liquid")
})

// new route
router.get("/finished", (req, res) => {
    res.render("books/newread.liquid")
})

// create route
router.post("/", (req, res) => {
    Book.create(req.body)
    .then((book) => {
        res.redirect("/books")
    })
})

// edit route
router.get("/:id/edit", (req, res) => {
    const id = req.params.id

    Book.findById(id)
    .then((book) => {
        res.render("books/edit.liquid", {book})
    })
})

// update route
router.put("/:id", (req, res) => {
    const id = req.params.id

    Book.findByIdAndUpdate(id, req.body, {new: true})
    .then((book) => {
         res.redirect("/books")
    })
})

// destroy route
router.delete("/:id", (req, res) =>{
    const id = req.params.id

    Book.findByIdAndRemove(id)
    .then((book) => {
        res.redirect("/books")
    })
})

// show route
router.get("/:id", (req, res) => {
    const id = req.params.id

    Book.findById(id)
    .then((book) => {
        res.render("books/show.liquid", {book})
    })
})





// export router
module.exports = router
