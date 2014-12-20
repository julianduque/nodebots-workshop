# Digital Mechanical Switch (Relay)

## Circuit

![Relay](http://i.imgur.com/gGBGcEM.png)

## Code

``` js
var five = require('johnny-five'),
    board = new five.Board(),
    relay;

board.on('ready', function () {
  relay = new five.Relay(8);

  this.repl.inject({
    relay: relay
  });

});
```

## Run

```
$ node switch.js
```

### [Go to Next Lesson >>](../joystick/)
