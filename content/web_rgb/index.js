var five    = require('johnny-five'),
    http    = require('http'),
    express = require('express'),
    app     = express(),
    server  = http.createServer(app),
    board   = new five.Board(),
    rgb;

//
// Start RGB Led
//
board.on('ready', function () {
  rgb = new five.Led.RGB([3, 5, 6]);
});

//
// HTTP Server
//
app.use(function (req, res, next) {
  if (rgb) return next();

  res.writeHead(503, { 'Content-Type': 'text/plain' });
  res.end('Arduino not ready');
});

app.get('/', function (req, res) {
  var color = req.query.color || '#FF0000';
  rgb.color(color);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Led is ' + color);
});

app.get('/on', function (req, res) {
  rgb.on();
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Led is on');
});

app.get('/off', function (req, res) {
  rgb.off();
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Led is off');
});

server.listen(8080);
