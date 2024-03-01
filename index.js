

const http = require("http");
const express = require('express');
const path = require("path");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);
//Socket.io
io.on('connection',(socket)=>{
    // console.log('A new User has Connected...', socket.id);
socket.on('user-message', message =>{
    // console.log("A new User Message", message);
    io.emit("message", message);
})

})

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.static(path.resolve("./public")));
server.listen(9000, () => console.log(`Server Started at PORT: 9000`));
