# Digital Mechanical Switch (Relay)

## Electronic Components

- [1 Relay 5v ](https://en.wikipedia.org/wiki/Relay)
- [2 Diodes Led](https://en.wikipedia.org/wiki/Light-emitting_diode)
- [3 Resistor 330 ohm](https://en.wikipedia.org/wiki/Resistor)
- [1 Diode 1N4007](https://en.wikipedia.org/wiki/1N4001_and_1N5400_series_diodes)
- [1 Transist0r 2N 2222](https://en.wikipedia.org/wiki/2N2222)

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
