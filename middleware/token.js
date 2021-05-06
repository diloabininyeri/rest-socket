const verifyToken = require('../functions/verifytoken')
const token = function (app) {

    app.use((req, res, next) => {
        if (!req.query.token) {
            return res.json({status: false, message: "not authorized"});
        }
        if (verifyToken(req.query.token)) {
            return next();
        }

        res.status(401);
        return res.json({status: false, message: "unauthorized"})
    });
}


module.exports = token