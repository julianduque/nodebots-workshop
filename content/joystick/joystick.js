var five  = require('johnny-five'),
    board = new five.Board(),
    joystick;

board.on('ready', function () {
  joystick = new five.Joystick({
    // Joystick pins are an array of pins
    // Pin orders:
    //   [ up, down, left, right ]
    //   [ ud, lr ]
    pins: ['A0', 'A1'],
    freq: 500
  });

  joystick.on('axismove', function(err, timestamp) {

    // Axis data is available on:
    // this.axis
    // {
    //   x: 0...1, ( 0 <-- L/R --> 1 )
    //   y: 0...1  ( 0 <-- D/U --> 1 )
    // }
    //
    // Center is ~0.5
    //
    console.log('LR:', this.fixed.x);
    console.log('UD:', this.fixed.y);
    console.log('MAG:', this.magnitude);
  });
});
