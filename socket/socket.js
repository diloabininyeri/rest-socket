const socket = function (io) {
    io.on('connection', (sc) => {
        sc.on("posts", (a) => {
            io.emit("posts", a)
        })
        console.log('Connected' + sc.id);
        sc.on("connect_error", (err) => sc.emit("connect_error", err))
    });

};


module.exports = socket