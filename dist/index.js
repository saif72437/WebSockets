"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let totalConnection = 0;
let allClient = [];
wss.on("connection", (client) => {
    // totalConnection += 1
    // console.log("Client Connect");
    // console.log("client count ", totalConnection)
    allClient.push(client);
    client.on("message", (msg) => {
        allClient.forEach(singleClient => {
            singleClient.send(msg.toString());
        });
    });
});
