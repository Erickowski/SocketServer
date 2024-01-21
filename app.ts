const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
  socket.on("message-to-server", (data) => {
    io.emit("message-from-server", data);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
