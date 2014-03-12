var five  = require('johnny-five'),
    board = new five.Board(),
    pin;

board.on('ready', function () {
  pin = new five.Pin(8);

  this.repl.inject({
    pin: pin
  });

});
