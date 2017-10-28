const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(80, () => console.log(`Server started at localhost:80`));

io.on("connection", socket => {
  socket.on("board", data => io.emit("board_data", data));
  socket.on("ui", data => io.emit("ui_data", data));


  socket.on("ui_output", data => io.emit("board_input",data))
  socket.on("board_output", data => io.emit("ui_input",data))
});
