# Music Player (Piezo Buzzer)

## Circuit

![Music Player](http://i.imgur.com/1zWACEl.png)

## Code

``` js
var five  = require('johnny-five'),
    board = new five.Board(),
    piezo;

board.on('ready', function() {
  piezo = new five.Piezo(6);

  piezo.song('ee e ce g   g   c  g  e  a b a a ', '1111111111111111111111111111111');
});
```

## Run

```
$ node music_player.js
```

### [Go to Next Lesson >>](../switch/)