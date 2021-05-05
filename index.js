const express = require('express')
const app = express()
const server = app.listen(3000)
const options = {
    cors: {
        origin: '*',
    },
};

global.io = require('socket.io')(server, options);
const listener = require('./functions/listener')
const posthandler = require('./functions/posthandle')

app.use((req, res, next) => {
    req.io = io;
    next();
})

app.get("/a", listener);
app.get("/form", posthandler);


io.on('connection', (socket) => {
    socket.on("posts", (a) => {
        io.emit("posts", a)
    })
    console.log('Connected' + socket.id);
});


