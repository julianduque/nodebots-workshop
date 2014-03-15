# PWM - Servo

## Circuit

![Servo](http://i.imgur.com/1mFapu4.png)

## Code

``` js
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
```

## Run

```
$ node servo.js
```

### [Go to Next Lesson >>](../potentiometer/)
