const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//import PostSchema
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('Post test!!!');
});

router.get('/specyfic', (req, res) => {
    res.send('test site!!!');
});

router.post('/', (req, res) => {
    console.log('req.body');
});

module.exports = router;
