const express = require('express');
const app = express();
const mongoose = require('mongoose');
//dotenv
require('dotenv/config');

//import Routes
const postRoute = require('./routes/posts');
const userRoute = require('./routes/user');

//Routes
app.use('/post', postRoute);
app.use('/user', userRoute);

//Routes
app.get('/', (req, res) => {
    res.send('Server started in PORT');
});


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
    console.log('Connect to DB!!!');
});


//LISTEN SERVER
const PORT = process.env.PORT || 3006;

app.listen(PORT, console.log(`Server start ${PORT}`)); 