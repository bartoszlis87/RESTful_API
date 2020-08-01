const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Post test!!!');
});

router.get('/specyfic', (req, res) => {
    res.send('test site!!!');
});


module.exports = router;
