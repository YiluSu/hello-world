var express = require('express');
var app = express();
var User = require('./user.js');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/user', function (req, res) {
  res.send(new User().userName);
});

var server = app.listen(1337, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});