# Analog Input - Temperature

## Electronic Components

- [1 LM35 Integrated Circuit ](https://es.wikipedia.org/wiki/LM35)

## Circuit

![Temperature](http://i.imgur.com/1sVJH61.png)

## Code

``` js
var five  = require('johnny-five'),
    board = new five.Board(),
    sensor;

board.on('ready', function () {
  sensor = new five.Sensor('A0');

  sensor.on('data', function() {
    var temp = getTemperature(this.value);
    console.log(temp.celsius + '°C', temp.fahrenheit + '°F');
  });
});


function getTemperature(value) {

  // LM35
  var celsius = (5 * value * 100) / 1024;

  // TM36
  // var celsius = ((value * 0.004882814) - 0.5) * 100;


  var fahrenheit = celsius * (9 / 5) + 32;

  return {
    celsius: celsius,
    fahrenheit: fahrenheit
  }
}
```

## Run

```
$ node temperature.js
```

### [Go to Next Lesson >>](../light_sensor/)
