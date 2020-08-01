const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User test!!!');
});

router.get('/user', (req, res) => {
    res.send('test user site!!!');
});


module.exports = router;