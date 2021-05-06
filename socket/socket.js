const allowedHosts = require('../socket/AllowedHosts')
const socket = function (io) {
    const allowedUri = allowedHosts();
    io.use((socket, next) => {
        const uri = socket.handshake.headers.origin;
        console.log(uri)
        if (allowedUri.includes(uri)) {
             next();
        } else {
             next(new Error("This host is not allowed"));
        }

    });
    io.on('connection', (sc) => {
        sc.on("posts", (a) => {
            io.emit("posts", a)
        })
        console.log('Connected' + sc.id);

        sc.on("connect_error", (err) => sc.emit("connect_error", err))
    });

};


module.exports = socket