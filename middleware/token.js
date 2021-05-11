const verifyToken = require('../functions/verifytoken')
const token = function (app) {

    app.use((req, res, next) => {
        if (!req.query.token) {
            res.status(401);
            return res.json({status: false, message: "not authorized token missing"});
        }
        if (verifyToken(req.query.token)) {
            return next();
        }

        res.status(401);
        return res.json({status: false, message: "unauthorized"})
    });
}


module.exports = token