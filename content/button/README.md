# Digital Input - Push Button

## Electronic Components

- [1 Push Switch](https://en.wikipedia.org/wiki/Push_switch)
- [1 100 Ohm Resistor](https://en.wikipedia.org/wiki/Resistor)

## Circuit

![Button](http://i.imgur.com/46o9Mb9.png)

## Code

``` js
var five  = require('johnny-five'),
    board = new five.Board(),
    button;

board.on('ready', function () {
  button = new five.Button(8);

  button.on('down', function () {
    console.log('down');
  });

  button.on('hold', function () {
    console.log('hold');
  });

  button.on('up', function () {
    console.log('up');
  });

});
```

## Run

```
$ node button.js
```

### [Go to Next Lesson >>](../servo/)
