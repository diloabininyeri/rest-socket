const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const server = app.listen(3000)
const options = {
    cors: {
        origin: '*',
    },
};

global.io = require('socket.io')(server, options);

app.use(bodyParser.json());

const initial = require('./bootstrap/initial');
const router = require('./router/router')
const socket = require('./socket/socket');
const tokenMiddleware = require('./middleware/token');
const socketMiddleware = require('./middleware/socketMiddleware');
tokenMiddleware(app)
initial.setSocketIo(app, io)
router(app)
socketMiddleware(io)
socket(io)
