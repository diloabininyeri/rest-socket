const express = require('express')
const app = express()
const server = app.listen(3000)
const options = {
    cors: {
        origin: '*',
    },
};

global.io = require('socket.io')(server, options);
const initial = require('./bootstrap/initial');
const router = require('./router/router')
const socket = require('./socket/socket');
const tokenMiddleware = require('./middleware/token');
initial.setBodyParser(app)
tokenMiddleware(app)
initial.setSocketIo(app, io)
router(app)
socket(io)
