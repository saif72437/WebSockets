import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080})

let totalConnection = 0

let allClient :WebSocket[] = []

wss.on("connection", (client)=>{
    // totalConnection += 1
    // console.log("Client Connect");
    // console.log("client count ", totalConnection)

    allClient.push(client)

    client.on("message", (msg)=>{
        
        allClient.forEach(singleClient =>{
            if(singleClient == client){

            }
            else{
                singleClient.send(msg.toString())
            }
        })
        
    })
})