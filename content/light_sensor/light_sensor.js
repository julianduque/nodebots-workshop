var five  = require('johnny-five'),
    board = new five.Board(),
    sensor,
    led;

board.on('ready', function () {
  led = new five.Led(6);
  sensor = new five.Sensor('A0');

  led.on();

  sensor.scale([0, 255]).on('data', function () {
    led.brightness(Math.round(this.scaled));
  });

});
