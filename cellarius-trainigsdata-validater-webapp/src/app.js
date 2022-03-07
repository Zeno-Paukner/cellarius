const express = require('express');
const { Mongoose } = require('mongoose');

const app = express();


// routes
app.get('/', (req, res) => {
    res.send('We are on home');
});


// connect to db
Mongoose.connect('mongodb://cellarius1:YQQL2TGaxWb2Uf6U@138.3.249.62:2717/?authSource=test&readPreference=primary&appname=MongoDB%20Compass&ssl=false', () =>
    console.log('connnected to DB')
);
 

// listen to server
app.listen(3000);