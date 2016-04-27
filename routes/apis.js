'use strict';
var express = require('express');
var router = express.Router();
var generator = require('../libs/generator.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Nginx config setting');
});

router.post('/v1/config/:name', generator);

module.exports = router;
