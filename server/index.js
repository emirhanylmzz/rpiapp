const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;
http.listen(port, () => console.log('listening on *: ' + port));

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var motor1 = new Gpio(17, 'out');
var motor2 = new Gpio(22, 'out');
var motor3 = new Gpio(23, 'out');
var motor4 = new Gpio(24, 'out');

// The event will be called when a client is connected.
io.sockets.on('connection', (socket) => {

  console.log('A client just joined on', socket.id);

  socket.on('direction', function(data) {
    if (data === "forward"){
      console.log("İleri gidiyor!");
      motor1.writeSync(0);
      motor2.writeSync(1);
      motor3.writeSync(1);
      motor4.writeSync(0);
    }
    else if (data === "backward"){
      console.log("Geriye gidiyor!");
      motor1.writeSync(1);
      motor2.writeSync(0);
      motor3.writeSync(0);
      motor4.writeSync(1);
    }
    else if (data === "right"){
      console.log("Sağa gidiyor!");
      motor1.writeSync(1);
      motor2.writeSync(1);
      motor3.writeSync(1);
      motor4.writeSync(0);
    }
    else if (data === "left"){
      console.log("Sola gidiyor!");
      motor1.writeSync(0);
      motor2.writeSync(1);
      motor3.writeSync(1);
      motor4.writeSync(1);
    }
    else if (data === "onRealese"){
      console.log("RPI CAR durduruldu!");
      motor1.writeSync(0);
      motor2.writeSync(0);
      motor3.writeSync(0);
      motor4.writeSync(0);
    }
  });
});






