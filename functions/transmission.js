const trim = require('../functions/trim');
const queryString = require('querystring');
const transmission = function (req, res) {

    const url = req.protocol + '://' + req.get('host') + req.originalUrl;
    const urlParse = new URL(url);
    const channel = trim(urlParse.pathname, '/');

    delete req.query.token;
    let body = ""
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        res.send(req.io.emit(channel, queryString.parse(body)))
    });

};

module.exports = transmission