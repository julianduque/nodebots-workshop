var Primus = require('primus'),
    http   = require('http'),
    mqtt   = require('mqtt'),
    util   = require('util'),
    url    = require('url'),
    fs     = require('fs'),
    qs     = require('querystring'),
    mq;

//
// Create http Server
//
var httpServer = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
});

//
// Create WebSockets Server
//
var primus = new Primus(httpServer);

primus.on('connection', function (spark) {
  spark.on('data', function (data) {
    var client = mq && mq.clients[data.client];
    if (client) {
      client.publish({ topic: 'messages', payload: data.message });
    }
  });
});

//
// Create mqtt Server
//
var mqttServer = mqtt.createServer(function (client) {
  mq = this;

  if (!mq.clients) mq.clients = {};

  client.on('connect', function (packet) {
    mq.clients[packet.clientId] = client;
    client.id = packet.clientId;
    client.subscriptions = [];
    console.log("Connected: " + client.id);
    client.connack({ returnCode: 0 });
  });

  client.on("publish", function (packet) {
    console.log(packet);
  });

  client.on("subscribe", function (packet) {
    var granted = [];

    for (var i = 0; i < packet.subscriptions.length; i++) {
      var qos = packet.subscriptions[i].qos,
          topic = packet.subscriptions[i].topic;

      granted.push(qos);
      client.subscriptions.push(topic);
    }

    client.suback({ granted: granted, messageId: packet.messageId });
  });

  client.on('pingreq', function (packet) {
    client.pingresp();
  });

  client.on('disconnect', function (packet) {
    client.stream.end();
  });

  client.on('close', function (packer) {
    delete mq.clients[client.id];
  });

  client.on('error', function (err) {
    client.stream.end();
    console.log(err);
  });

});

//
// Start Servers
//
mqttServer.listen(1883);
httpServer.listen(8080);
console.log("MQTT and HTTP Server listening");
