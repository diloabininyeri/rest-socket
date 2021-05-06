const bcrypt = require("bcrypt")
const verifyToken = function (token) {
    token = token.replace('$2y$', '$2a$');
    return bcrypt.compareSync("deneme", token);
};

module.exports = verifyToken