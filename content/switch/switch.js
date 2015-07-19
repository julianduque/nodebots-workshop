var five  = require('johnny-five'),
    board = new five.Board(),
    relay;

board.on('ready', function () {
  relay = new five.Relay(8);

  this.wait(5000,function(){
    relay.toggle();

    //relay.on();
    //relay.off();

  });

  this.repl.inject({
    relay: relay
  });

});
