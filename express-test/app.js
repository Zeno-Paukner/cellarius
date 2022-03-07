const { config } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
const bodyParaser = require('body-parser');
const app = express();

app.use(bodyParaser.json());

// import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)


// routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// connect to db
mongoose.connect(process.env.MCS, () =>
    console.log('connnected to DB')
);



// listen to server
app.listen(3000);
