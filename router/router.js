const  transmission=require('../functions/transmission')
const router = (app) => {
    app.all("/*",transmission)

}

module.exports = router