//required modules and files
const express = require('express');
const library = require('./data/library.js');
const uuid = require('./utils/uuid');

//create an instance of express
const PORT = 3001;
const app = express();

//middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    //return a response from the server containing all books
    res.json(library);
});

app.post('/', (req, res) => {
    //create new book object from values provided by client
    const newBook = {
        book_id: uuid(),
        book_name: req.body.book_name,
        author: req.body.author,
        publisher: req.body.publisher
    }
    //add to current set of books
    library.push(newBook);
    //response from server
    res.json(library);
})

app.put('/:book_id', (req, res) => {
    //search for book
    const searchedBookId = req.params.book_id;

    //iterate over to see if a match occurs
        for (let i = 0; i < library.length; i++) {    
            if (library[i].book_id === searchedBookId) {

                //apply the values of a potential edit
                editedBook = {
                    book_id: library[i].book_id,
                    book_name: req.body.book_name,
                    author: req.body.author,
                    publisher: req.body.publisher
                }
                //rewrite the matched book
                library[i] = {...editedBook}  
            } 
        }
        //response from server
        res.status(200).json(library).end()
});

app.delete('/:book_id', (req, res) => {
    //loop through our results until it matches 
    for (let i = 0; i < library.length; i++) {
        if (library[i].book_id === req.params.book_id) {
            //filter out the result set with the book that matches to replicate a delete
            filteredBooks = library.filter(function(book) {
                return book.book_id !== req.params.book_id;
              });
        }
    }
    //response from server
    res.status(200).json(filteredBooks);
})

//listener for incoming requests
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
