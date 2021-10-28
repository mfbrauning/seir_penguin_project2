 // make .env  variables available
 require("dotenv").config()
 // import mongoose
 const mongoose = require("mongoose")

 //connect to database
 mongoose.connect(process.env.DATABASE_URL, {useUnifiedTopology: true, useNewUrlParser: true})

 // save connection in variable
 const db = mongoose.connection

 // create notifications for connections
 db.on("open", () => {
     console.log("connected to mongo")
 })
 db.on("close", () => {
    console.log("disconnected from mongo")
})
db.on("error", (error) => {
    console.log(error)
})



// export connection
module.exports = mongoose