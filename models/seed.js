const mongoose = require("./connection")
const Book = require("./book")

// save connection in variable
const db = mongoose.connection

// run seed code when connection opens
db.on("open", () => {

    // delete existing books
    Book.deleteMany({})
    .then(() => {

        // seed data
        const seedData = [
           {
                title: 'To Write as if Already Dead',
                author: 'Kate Zambreno',
                year: 2021,
                img: 'https://cup-us.imgix.net/covers/9780231188456.jpg?auto=format&w=350',
                review: 'This book is a tour de force. I was completely awestruck by the way Zambreno enacts the concept of the title, and by the way she writes the body, hers and Guibert’s. It is a moving performative act, a document of our time from the trenches, and a brilliant critical study.',
                reviewAuthor: 'Moyra Davey'
              },
              {
                title: 'Blood and Guts in High School',
                author: 'Kathy Acker',
                year: 1984,
                img: 'https://groveatlantic.com/core/wp-content/uploads/2017/04/BloodAndGutsInHighSchoolPK-340x509.jpg',
                review: 'As Acker’s atypical feminism suggests, identity politics is not exactly her thing. The body is certainly at stake, but it is not a starting point for addressing standard political issues.',
                reviewAuthor: 'Ralph Clare',
              },
              {
                title: 'The Setting Sun',
                author: 'Osamu Dazai',
                year: 1947,
                img: 'https://ndbooks.imgix.net/dazai_setting_sun_cover_for_web_rev.jpg',
                review: 'Written with beauty, refinement, and force: a work of unmistakable distinction…',
                reviewAuthor: 'Atlantic Monthly',
              },
              {
                title: 'Submission',
                author: 'Michel Houellebecq',
                year: 2015,
                img: 'https://images-na.ssl-images-amazon.com/images/I/71qwSzqHLcL.jpg',
                review: "Few will disagree that Michel Houellebecq's 'Submission' ... is a novel of ideas — even though most of them are deeply discomfiting if not downright offensive.",
                reviewAuthor: 'Heller McAlpin',
              }
        ]

        // create new books from seed data
        Book.create(seedData)
        .then((books) => {
            console.log(books)
            db.close()
        })


    })

})