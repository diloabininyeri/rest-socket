const  transmission=require('../functions/transmission')
const { parse } = require('querystring');
const router = (app) => {
    app.all("/*",transmission)
}

module.exports = router