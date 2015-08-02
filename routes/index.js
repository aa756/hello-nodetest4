var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*GET hello world page. */
router.get ('/helloworld', function(req, res) {
	res.render('helloworld', { title: 'Hello, World!'});
});

/*GET hello adi page. */
router.get ('/helloadi', function(req, res) {
	res.render('helloadi', { title: 'Hello, Adi!'});
});

module.exports = router;
