const express = require('express');
const router = express.Router();

router.get('/get1', (req, res) => {
    res.json({data: "get 1"});
});

router.get('/get2', (req, res) => {
    res.json({data: 'get 2'});
});

router.post('/post1', (req, res) => {
    res.json({data: 'post 1'});
});

router.post('/post2', (req, res) => {
    res.json({data: 'past 2'});
});

module.exports = router;
