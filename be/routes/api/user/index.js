var express = require('express');
var createError = require('http-errors')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	const us = [
		{
			name: '김김김',
			age: 14
		},
		{
			name: '이이이',
			age: 24
		}
	]
  	res.send(us);
});

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어용'));
});

module.exports = router;
