const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')

const app  = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', "Welcome!")
    socket.broadcast.emit('message', 'A new user has joined!')

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if (filter.isProfane(message)) {
            callback({"swore": true})
            io.emit('message', filter.clean(message))
        } else{
            io.emit('message', message)
            callback('Delivered')
        }

    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left!')
    })

    socket.on('kickUser', () => {
        io.emit('message', 'Person A has been kicked because he/she swore too much') //TODO: fill in with real username
    })

    socket.on('sendLocation', (location, callback) => {
        io.emit('message', `https://google.com/maps?q=${location.lat},${location.long}`)
        callback()
    })
})


server.listen(port, () => {
    console.log('Server is up on port ' + port)
})
