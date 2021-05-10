const trim = require('../functions/trim')
const transmission = function (req, res) {

    const url = req.protocol + '://' + req.get('host') + req.originalUrl;
    const urlParse=new URL(url);
    const channel = trim(urlParse.pathname, '/');
    delete req.query.token;
    res.send(req.io.emit(channel, req.query))
};

module.exports = transmission