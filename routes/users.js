var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/chat', function(req, res) {
  res.sendFile("test.js");
});

module.exports = router;
