const bcrypt = require("bcrypt")
require('dotenv').config();
const verifyToken = function (token) {

    const checkToken = process.env.CHECK_TOKEN
    if (checkToken.length === 4) {
        token = token.replace('$2y$', '$2a$');
        return bcrypt.compareSync("deneme", token);
    }
    return  true;
};

module.exports = verifyToken