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
