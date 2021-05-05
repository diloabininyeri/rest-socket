const posthandle = function (req, res) {

    return res.send(req.io.emit("posts", req.body));
};


module.exports = posthandle;