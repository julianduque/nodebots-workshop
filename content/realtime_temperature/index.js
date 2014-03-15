var Primus = require('primus'),
    http   = require('http'),
    fs     = require('fs'),
    five   = require("johnny-five")
    sensor = null;

//
// Setup http server
//
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream('./index.html').pipe(res);
});

//
// Setup Realtime server
//
var app = new Primus(server, { transformer: 'engine.io', parser: 'JSON' });
app.use('emitter', 'primus-emitter');

//
// Initialize Board and Start Server
//
five.Board().on("ready", function(){
  sensor = new five.Sensor({ pin: "A0", freq: 500 });
  server.listen(8080);
});

// Wait for Socket Connections
app.on('connection', function (socket) {
  // Emit Temperature data

  sensor.on("data", function () {
    var temp = getTemperature(this.value);
    socket.send('temperature', temp);
  });
});

function getTemperature(value) {
  var celsius = (5 * value * 100) / 1024;
  var fahrenheit = celsius * (9 / 5) + 32;
  return {
    celsius: celsius,
    fahrenheit: fahrenheit
  }
}
