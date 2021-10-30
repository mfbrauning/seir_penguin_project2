// dependencies
require("dotenv").config() // make env variables available
const express = require("express")
const methodOverride = require("method-override")
const morgan = require("morgan")
const BookRouter = require("./controllers/book")


// create app object
const app = require("liquid-express-views")(express())

//  set up middleware
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

// routes

app.get("/", (req, res) => {
    res.render("books/main.liquid")
})
app.use("/books", BookRouter)




// listener
const PORT = process.env.PORT
app.listen(PORT, console.log(`listening on port ${PORT}`))