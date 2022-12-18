const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

//Initialize the app
const app = express();

//Adding middleware for request body (this is the body parser)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on Port: ${port}`));





