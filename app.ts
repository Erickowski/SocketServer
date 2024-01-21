const { ServerModel } = require("./models/server");

const server = new ServerModel();

server.execute();

// io.on("connection", (socket) => {
//   socket.on("message-to-server", (data) => {
//     io.emit("message-from-server", data);
//   });
// });
