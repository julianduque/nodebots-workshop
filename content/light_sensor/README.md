# Light Sensor (Photoresistor)

## Circuit

![Light Sensor](http://i.imgur.com/A15e29K.png)

## Code

``` js
var five  = require('johnny-five'),
    board = new five.Board(),
    sensor,
    led;

board.on('ready', function () {
  led = new five.Led(6);
  sensor = new five.Sensor('A0');

  led.on();

  sensor.scale([0, 255]).on('data', function () {
    led.brightness(Math.round(this.scaled));
  });

});
```

## Run

```
$ node light_sensor.js
```

### [Go to Next Lesson >>](../music_player/)