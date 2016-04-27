'use strict';
var express = require('express');
var router = express.Router();
var configuration = require('../libs/config_generator.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Nginx config setting');
});

router.post('/v1/:name', configuration)

module.exports = router;
