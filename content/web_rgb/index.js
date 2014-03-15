var http = require('http'),
    express = require('express')

var app = express();
var server = http.createServer(app);

app.get('/on', function (req, res) {});
app.get('/off', function (req, res) {});
app.get('/color', function (req, res) {
  console.log(req.param);
});

server.listen(8080);
