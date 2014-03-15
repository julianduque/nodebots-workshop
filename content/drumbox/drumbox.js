var five  = require('johnny-five'),
    play  = require('./player').play,
    board = new five.Board(),
    bd, clap, crash;

board.on('ready', function () {
  bd = new five.Button(8);
  clap = new five.Button(9);
  crash = new five.Button(10);

  bd.on('down', playBd);
  clap.on('down', playClap);
  crash.on('down', playCrash);
});

function playBd() {
  play('909BD');
}

function playClap() {
  play('909clap');
}

function playCrash() {
  play('909crash');
}
