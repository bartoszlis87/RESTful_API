const express = require('express');

const app = express();


//ROUTES in Express
app.get('/', (req, res) => {
    res.send('Server started in PORT');
});

app.get('/post', (req, res) => {
    res.send('test!!!');
});

//Middlewares
app.use('/post', () => {
    console.log('test działa!!!');
});

//LISTEN SERVER
const PORT = process.env.PORT || 3006;

app.listen(PORT, console.log(`Server start ${PORT}`)); 