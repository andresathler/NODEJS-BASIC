const express = require('express');
const path = require('path');

const rootDir = require('../utils/path')

const router = express.Router();

router.use((req, res, next) => {
    res.render('404')
});

module.exports = router;
