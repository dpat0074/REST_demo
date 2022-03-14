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

//listener for incoming requests
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
