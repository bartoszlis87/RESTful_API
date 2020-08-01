const express = require('express');
const app = express();
const moongose = require('mongoose');
//dotenv
require('dotenv/config');

//ROUTES in Express
app.get('/', (req, res) => {
    res.send('Server started in PORT');
});

app.get('/post', (req, res) => {
    res.send('test!!!');
});


//Connect to DB
moongose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
    console.log('Connect to DB!!!');
});


//LISTEN SERVER
const PORT = process.env.PORT || 3006;

app.listen(PORT, console.log(`Server start ${PORT}`)); 