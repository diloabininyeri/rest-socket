const allowedHosts = require('../socket/AllowedHosts')
require('dotenv').config();
const verifyToken = require('../functions/verifytoken');
const socketMiddleware = function (io) {
    const allowedUri = allowedHosts();
    const checkHost = process.env.CHECK_HOST;

    console.log(checkHost.length)

    io.use((socket, next) => {
        const uri = socket.handshake.headers.origin;
        const token = socket.handshake.auth.token;
        if (!verifyToken(token)) {
            return next(new Error('not authorized'))
        }
        if (checkHost.length===4) {
            return allowedUri.includes(uri) ? next() : next(new Error("This host is not allowed"))
        } else {
            return next();
        }

    });
};

module.exports = socketMiddleware;