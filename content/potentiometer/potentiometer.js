var five  = require('johnny-five'),
    board = new five.Board(),
    sensor;

board.on('ready', function () {
  sensor = new five.Sensor("A0");

  sensor.on('data', function () {
    console.log(this.value);
  });

});
