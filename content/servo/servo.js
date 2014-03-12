var five  = require('johnny-five'),
    board = new five.Board(),
    servo;

board.on('ready', function () {
  servo = new five.Servo(3);

  servo.sweep();

  this.repl.inject({
    servo: servo
  });

});
