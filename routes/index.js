var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/chat', function(req, res) {
  res.sendfile("test.html");
});



module.exports = router;
