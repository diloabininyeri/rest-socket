const allowedHosts = require('../socket/AllowedHosts')
const verifyToken = require('../functions/verifytoken');
const socketMiddleware = function (io) {
    const allowedUri = allowedHosts();
    io.use((socket, next) => {
        const uri = socket.handshake.headers.origin;
        const token=socket.handshake.auth.token;
        if (!verifyToken(token)) {
            return next(new Error('not authorized'))
        }
        if (allowedUri.includes(uri)) {
            return next();
        } else {
            return next(new Error("This host is not allowed"));
        }

    });
};

module.exports = socketMiddleware;