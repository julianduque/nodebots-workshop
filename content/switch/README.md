# Digital Mechanical Switch (Relay)

## Circuit

![Relay](http://i.imgur.com/gGBGcEM.png)

## Code

``` js
var five = require('johnny-five'),
    board = new five.Board(),
    pin;

board.on('ready', function () {
  pin = new five.Pin(8);

  this.repl.inject({
    pin: pin
  });

});
```

## Run

```
$ node switch.js
```

### [Go to Next Lesson >>](../switch/)