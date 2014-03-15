var spawn = require('child_process').spawn;

exports.play = function (sound, pitch) {
  var ps = spawn('play', ['./sounds/' + sound + '.wav']);
  ps.on('error', console.error);
}
