const uuid = require('../utils/uuid');

//dummy data
const library = [
    {
        library_id: uuid(),
        library_name: 'New York Public Library',
        location: 'New York, US',
        library_type: 'Public',
        books: [
            {
                book_id: uuid(),
                book_name: 'The Da Vinci Code',
                author: 'Dan Brown',
                publisher: 'Penguin',
            },
            {
                book_id: uuid(),
                book_name: 'The Lost Symbol',
                author: 'Dan Brown',
                publisher: 'Penguin',
            },
            {
                book_id: uuid(),
                book_name: 'Life of Pi',
                author: 'Yann Martel',
                publisher: 'Penguin',
            }
        ]
    },
    {
        library_id: uuid(),
        library_name: 'Library of Congress',
        location: 'Washington DC, US',
        library_type: 'Public',
        books: [
            {
                book_id: uuid(),
                book_name: 'Rule of Law',
                author: 'Tom Bingham',
                publisher: 'HarperCollins',
            },
            {
                book_id: uuid(),
                book_name: 'The Art of War',
                author: 'Sun Tzu',
                publisher: 'Penguin',
            },
            {
                book_id: uuid(),
                book_name: 'Harry Potter and the Philosopher\'s Stone',
                author: 'J.K. Rowling',
                publisher: 'Scholastic',
            }
        ]
    },
    {
        library_id: uuid(),
        library_name: 'Vatican Library',
        location: 'Rome, Italy',
        library_type: 'Credential Based',
        books: [
            {
                book_id: uuid(),
                book_name: 'Bible',
                author: 'God',
                publisher: 'Zondervan',
            },
            {
                book_id: uuid(),
                book_name: 'City of God',
                author: 'Augustine',
                publisher: 'NA',
            },
            {
                book_id: uuid(),
                book_name: 'The Book of Kells',
                author: 'Various',
                publisher: 'NA',
            }
        ]
    }
]

module.exports = library;