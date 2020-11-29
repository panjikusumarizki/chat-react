const express = require('express')
const socketIo = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 4000

const router = require('./router')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

io.on('connection', (socket) => {
    console.log('We have a new connection !!!')

    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room)
    })

    socket.on('disconnect', () => {
        console.log('User had left !!!')
    })
})

app.use(router)

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))