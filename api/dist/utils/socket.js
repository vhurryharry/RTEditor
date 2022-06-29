"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const initSocket = () => {
    const io = new socket_io_1.Server();
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
exports.default = initSocket;
