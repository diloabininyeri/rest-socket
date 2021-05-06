const hello = require('../functions/hello')
const router = (app) => {

    app.get("/say", (r, a) => a.json({name:hello("dilo")}));

    app.get("/dene", (req, res) => res.send(req.io.emit("posts", "selam")))

}

module.exports = router