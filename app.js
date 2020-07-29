const express = require('express');

const app = express();


//ROUTES
app.get('/', (req, res) => {
    res.send('Server started in PORT');
});



//LISTEN SERVER
const PORT = process.env.PORT || 3006;

app.listen(PORT, console.log(`Server start ${PORT}`)); 