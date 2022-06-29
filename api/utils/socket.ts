import { Server } from "socket.io";

const initSocket = () => {
  const io = new Server();

  io.on("connection", (socket) => {
    console.log("connected");
    socket.on("message", (evt) => {
      console.log(evt);
      socket.broadcast.emit("message", evt);
    });
  });
  io.on("disconnect", (evt) => {
    console.log("some people left");
  });
};

export default initSocket;
