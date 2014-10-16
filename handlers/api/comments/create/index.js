exports = module.exports = function(comments) {
    return function(req, res) {
        comments.create(req.body, function(err, result) {
            if (err) return res.status(400).send(err);
            res.status(200).send(result);
        });
    };
};
