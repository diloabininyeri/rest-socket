const bodyParser = require('body-parser');
const setBodyParser = function (app) {
    app.use(bodyParser.json())
}
const setSocketIo = function (app, io) {
    app.use((req, res, next) => {
        req.io = io;
        next();
    })


};

module.exports = {setSocketIo, setBodyParser}
