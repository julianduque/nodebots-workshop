# Analog Input - Potentiometer

## Electronic Components

- [1 Potentiometer](https://en.wikipedia.org/wiki/Potentiometer)

## Circuit

![Potentiometer](http://i.imgur.com/nMHAYy1.png)

## Code

``` js

var five  = require('johnny-five'),
    board = new five.Board(),
    sensor;

board.on('ready', function () {
  sensor = new five.Sensor("A0");

  sensor.on('data', function () {
    console.log(this.value);
  });

});

```

## Run

```
$ node potentiometer.js
```

### [Go to Next Lesson >>](../temperature/)
