const bcrypt = require("bcrypt")
require('dotenv').config();
const verifyToken = function (token) {

    const checkToken = process.env.CHECK_TOKEN
    if (checkToken.length === 4) {
        return true;
    }
    token = token.replace('$2y$', '$2a$');
    return bcrypt.compareSync("deneme", token);
};

module.exports = verifyToken