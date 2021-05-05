const server = require('http').createServer();
const options = {
    cors: {
        origin: '*',
    },
};

const io = require('socket.io')(server, options);

io.on('connection', (socket) => {
    socket.on("posts", (a) => {
        io.emit("posts", a)
    })
    console.log('Connected' + socket.id);
});


server.listen(3000)