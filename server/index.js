const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;
http.listen(port, () => console.log('listening on *: ' + port));

// The event will be called when a client is connected.
io.sockets.on('connection', (socket) => {
  
  console.log('A client just joined on', socket.id);
  
  socket.on('direction', function(data) {
    if (data === "forward"){
      console.log("İleri gidiyor!");
    }
    else if (data === "backward"){
      console.log("Geriye gidiyor!");
    }
    else if (data === "right"){
      console.log("Sağa gidiyor!");
    }
    else if (data === "left"){
      console.log("Sola gidiyor!");
    }
    else if (data === "onRealese"){
      console.log("RPI CAR durduruldu!");
    }
  });
});