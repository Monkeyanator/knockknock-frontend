const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log("here we are")
  loop();
});

function loop() {
    setTimeout(function(){
        console.log("Looping...")
        wss.clients.forEach(function(client){
            client.send("John is online!");
        });
        loop();
    }, 3500);
}