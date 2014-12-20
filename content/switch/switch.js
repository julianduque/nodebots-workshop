var five  = require('johnny-five'),
    board = new five.Board(),
    relay;

board.on('ready', function () {
  relay = new five.Relay(8);

  this.repl.inject({
    relay: relay
  });

});
