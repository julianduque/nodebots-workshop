var five  = require('johnny-five'),
    board = new five.Board(),
    shift;

board.on('ready', function () {
  shift = new five.ShiftRegister({
    pins: {
      data: 2,
      clock: 3,
      latch: 4
    }
  });

   var value = 0;

  function next() {
    value = value > 0x11 ? value >> 1 : 0x88;
    shift.send(value);
    setTimeout(next, 200);
  }

  next();
});
