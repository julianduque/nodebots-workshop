# Led RGB

## Electronic Components

- 1 Diode RGB
- 3 Resistors 330 Ohm

## Circuit

![RGB](http://i.imgur.com/kc3fxsY.png)

## Code

``` js
var five  = require('johnny-five'),
    board = new five.Board(),
    rgb;

board.on('ready', function () {
  rgb = new five.Led.RGB([3, 5, 6]);

  rgb.color('#ff0000');

  this.repl.inject({
    rgb: rgb
  });

});
```

## Run

```
$ node rgb.js
```

### [Go to Next Lesson >>](../holiday_ligths/)
