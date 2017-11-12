const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { PORT, HOST } = require("./config.json");

process.env.PORT = process.env.PORT || PORT;
process.env.HOST = process.env.HOST || HOST;

server.listen(process.env.PORT, process.env.HOST, () =>
  console.log(`Server started at ${HOST}:${PORT}`)
);

io.on("connection", socket => {
  socket.on("board", data => io.emit("board", data));
  socket.on("ui", data => {
    console.log(data);
    io.emit("ui", data);
  });
});
