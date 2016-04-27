'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Nginx config setting');
});

router.post('/v1/:name', function (req, res, next) {
  res.send('generate' + req.params.name);
});

module.exports = router;
