var express = require('express');
var createError = require('http-errors')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({msg: 'hello', a : '괜찮아'})
});

router.get('/hello', function(req, res, next) {
  res.send({msg: 'hello', a : 1})
});

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어용'));
});

module.exports = router;
