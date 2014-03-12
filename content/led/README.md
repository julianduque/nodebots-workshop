# Digital Output - Led

## Circuit

![Led](http://i.imgur.com/A6kFJ3g.png)

## Code
``` js
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
```

## Run

```
$ node led.js
```

### [Go to Next Lesson >>](../button/)
