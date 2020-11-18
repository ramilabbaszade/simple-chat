const express = require('express')
const socket = require('socket.io')
const app = express()

app.use(express.static('public'))

const server = app.listen(5000,()=>{
    console.log("App listen on https://localhost:5000")
})

let io = socket(server);

io.on('connection',(socket)=>{
    console.log("Socket connection on",socket.id)

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data)
    })
})