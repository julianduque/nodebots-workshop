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
