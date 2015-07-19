# Digital Output - Led

## Electronic Components

 - [1 Resistor 220 Ohm](https://en.wikipedia.org/wiki/Resistor)
 - [1 Diodo Led](https://en.wikipedia.org/wiki/Light-emitting_diode)

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
