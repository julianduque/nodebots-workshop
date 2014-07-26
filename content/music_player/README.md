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

  // Plays a song
  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["C4", 1/4],
      ["D4", 1/4],
      ["F4", 1/4],
      ["D4", 1/4],
      ["A4", 1/4],
      [null, 1/4],
      ["A4", 1],
      ["G4", 1],
      [null, 1/2],
      ["C4", 1/4],
      ["D4", 1/4],
      ["F4", 1/4],
      ["D4", 1/4],
      ["G4", 1/4],
      [null, 1/4],
      ["G4", 1],
      ["F4", 1],
      [null, 1/2]
    ],
    tempo: 100
  });
});
```

## Run

```
$ node music_player.js
```

### [Go to Next Lesson >>](../switch/)
