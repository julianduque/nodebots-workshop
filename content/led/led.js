var five  = require('johnny-five'),
    board = new five.Board(),
    led;

board.on('ready', function () {
  led = new five.Led(8);

  led.on();

  this.wait(5000, function () {
    led.off();
  });

  this.repl.inject({
    led: led
  });
});
