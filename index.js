const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
/*const bodyParser = require('body-parser');*/
const server = app.listen(process.env.APP_PORT)

const options = {
    cors: {
        origin: '*',
    },
};

app.use(cors());
global.io = require('socket.io')(server, options);

const initial = require('./bootstrap/initial');
const router = require('./router/router')
const socket = require('./socket/socket');
const tokenMiddleware = require('./middleware/token');
const socketMiddleware = require('./middleware/socketMiddleware');
tokenMiddleware(app)
initial.setSocketIo(app, io)
initial.setBodyParser(app)
router(app)
socketMiddleware(io)
socket(io)
