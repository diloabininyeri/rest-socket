const listener = function (req, res) {
    return req.io.emit("posts","selam")
};

module.exports=listener;