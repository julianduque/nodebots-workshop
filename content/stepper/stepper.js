var five  = require('johnny-five'),
    board = new five.Board(),
    motor;

board.on('ready', function () {
  stepper = new five.Stepper({
    type: five.Stepper.TYPE.DRIVER,
    stepsPerRev: 48,
    pins: [ 8, 9, 10, 11 ]
  });

  stepper.rpm(180).ccw().accel(1600).decel(1600).step(2000, function () {
    console.log('Done with ccw');

    stepper.step({
      steps: 2000,
      direction: five.Stepper.DIRECTION.CW
    }, function () {
      console.log('Done with CW');
    });
  });
});
