var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mensajes = [];
var five = require("johnny-five");
var board = new five.Board();
board.on("ready", function () {
  var relay1 = new five.Relay(4);

  io.on('connection', (socket) => {
    console.log("Alguien se ha conectado con Socket ");
    socket.emit('messages', {
      id: 1,
      text: "Hola soy un mensaje",
      author: "Oscar Martinez "
    });
    socket.on('newMessage', (data) => {

      console.log("Vamos a apagar un foco con web");
      relay1.off();
      //io.sockets.emit('messages', mensajes);
    });

    socket.on('encender', () => {
      console.log("Vamos a encender un foco con web");
      relay1.on();
    });

  });


  this.repl.inject({
    relay: relay1
  });
});

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.status(200).send({ Mesaje: "Esto funciona a toda madre " });
});



server.listen(3000, (e) => {
  console.log("Server escuchando en el puerto 3000");
})
